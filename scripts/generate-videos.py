#!/usr/bin/env python3
"""
Generate cinematic B&W background videos using Gemini Veo 3.1 API.
Saves videos to /Users/tj/humanstudio-site/public/
"""

import json
import time
import urllib.request
import urllib.error
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "YOUR_GEMINI_API_KEY_HERE"  # Get from https://aistudio.google.com/apikey
MODEL = "veo-3.1-generate-preview"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:predictLongRunning"
POLL_BASE = "https://generativelanguage.googleapis.com/v1beta"
OUTPUT_DIR = Path("/Users/tj/humanstudio-site/public")

VIDEOS = {
    "hero-bg.mp4": (
        "Slow cinematic dolly forward through a vast industrial loft studio. "
        "Concrete floors, exposed steel beams, floor-to-ceiling warehouse windows on the far wall. "
        "Late afternoon sun pours through the glass, casting long dramatic shafts of golden light across the space. "
        "Thick dust particles drift lazily through the light beams. "
        "A large wooden worktable sits center-frame with scattered architectural sketches, a matte black laptop, and a ceramic coffee mug. "
        "The camera glides forward at a meditative pace, barely moving. Shadows are deep and rich. "
        "The atmosphere feels alive — contemplative, charged with creative potential. "
        "Shot on 35mm Kodak Vision3 500T film stock, shallow depth of field, anamorphic lens flare from the windows, "
        "desaturated warm tones verging on monochrome. No people visible. No text or watermarks."
    ),
    "community-bg.mp4": (
        "Tight overhead shot of a large reclaimed-wood table where four pairs of hands are working together. "
        "Hands sketch with charcoal pencils on butcher paper, arrange physical wireframe cards, point at details, pass a ceramic cup. "
        "The movement is unhurried and purposeful. "
        "Warm sidelight from a single source illuminates the hands and materials, leaving the edges of frame in deep shadow. "
        "You can feel the quiet intensity of focused collaboration. "
        "Camera holds steady with only the subtlest breathing movement. "
        "Shot on Kodak Tri-X 400 film pushed to 800, heavy analog grain, black and white, rich midtones. "
        "Close-up scale — only hands, forearms, and the work surface visible. No faces. No text or watermarks."
    ),
    "studio-bg.mp4": (
        "Wide shot from behind and slightly below — a single man stands silhouetted before a massive wall of industrial windows. "
        "He faces outward, hands at his sides, contemplating the cityscape beyond. "
        "The windows stretch from floor to ceiling, filling the frame with diffused white light. "
        "The figure is a near-perfect silhouette — shoulders relaxed, posture grounded. "
        "Atmospheric haze softens the light into a luminous glow around his outline. "
        "The camera is completely still except for a barely perceptible slow push-in. "
        "Dust motes float in the light like suspended time. "
        "The feeling is monumental solitude — a builder surveying what's next. "
        "Shot on ARRI Alexa with Cooke S4 lenses, shallow depth of field on the figure, anamorphic bokeh on the windows. "
        "High contrast, desaturated to near-monochrome with faint warm undertones. No text or watermarks."
    ),
}


def start_generation(name, prompt):
    """Submit a video generation request, return operation name."""
    payload = json.dumps({
        "instances": [{"prompt": prompt}],
        "parameters": {
            "aspectRatio": "16:9",
            "durationSeconds": 8,
            "resolution": "720p",
            "negativePrompt": "text, watermark, logo, cartoon, animation, low quality, blurry, bright colors, neon"
        }
    }).encode()

    req = urllib.request.Request(
        f"{ENDPOINT}?key={API_KEY}",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    print(f"[{name}] Submitting generation request...")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read())
            op_name = data.get("name")
            print(f"[{name}] Operation started: {op_name}")
            return op_name
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"[{name}] ERROR {e.code}: {body}")
        return None


def poll_until_done(name, operation_name, interval=10, max_wait=600):
    """Poll operation until done or timeout."""
    url = f"{POLL_BASE}/{operation_name}?key={API_KEY}"
    elapsed = 0

    while elapsed < max_wait:
        time.sleep(interval)
        elapsed += interval

        req = urllib.request.Request(url, headers={"Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = json.loads(resp.read())

            if data.get("done"):
                print(f"[{name}] Generation complete! ({elapsed}s)")
                return data
            else:
                print(f"[{name}] Still generating... ({elapsed}s)")

        except urllib.error.HTTPError as e:
            body = e.read().decode()
            print(f"[{name}] Poll error {e.code}: {body}")
            if e.code >= 500:
                continue
            return None

    print(f"[{name}] Timed out after {max_wait}s")
    return None


def download_video(name, result_data):
    """Extract video URI from result and download."""
    try:
        response = result_data.get("response", {})
        generated = response.get("generateVideoResponse", {}).get("generatedSamples", [])
        if not generated:
            print(f"[{name}] No video samples in response")
            print(f"[{name}] Full response: {json.dumps(result_data, indent=2)}")
            return False

        video_uri = generated[0].get("video", {}).get("uri")
        if not video_uri:
            print(f"[{name}] No video URI found")
            return False

        # Append API key to download URI
        download_url = f"{video_uri}&key={API_KEY}" if "?" in video_uri else f"{video_uri}?key={API_KEY}"

        output_path = OUTPUT_DIR / name
        print(f"[{name}] Downloading from {video_uri[:80]}...")

        req = urllib.request.Request(download_url, headers={"x-goog-api-key": API_KEY})
        with urllib.request.urlopen(req, timeout=120) as resp:
            video_bytes = resp.read()
            output_path.write_bytes(video_bytes)
            size_mb = len(video_bytes) / (1024 * 1024)
            print(f"[{name}] Saved! ({size_mb:.1f} MB)")
            return True

    except Exception as e:
        print(f"[{name}] Download error: {e}")
        return False


def generate_one(name, prompt):
    """Full pipeline for one video: submit → poll → download."""
    op_name = start_generation(name, prompt)
    if not op_name:
        return False

    result = poll_until_done(name, op_name)
    if not result:
        return False

    return download_video(name, result)


def main():
    print("=" * 60)
    print("  ALIVE STUDIO — Video Generation (Veo 3.1)")
    print("=" * 60)
    print(f"Generating {len(VIDEOS)} videos...\n")

    results = {}
    with ThreadPoolExecutor(max_workers=3) as pool:
        futures = {
            pool.submit(generate_one, name, prompt): name
            for name, prompt in VIDEOS.items()
        }
        for future in as_completed(futures):
            name = futures[future]
            try:
                results[name] = future.result()
            except Exception as e:
                print(f"[{name}] Exception: {e}")
                results[name] = False

    print("\n" + "=" * 60)
    print("  RESULTS")
    print("=" * 60)
    for name, success in results.items():
        status = "OK" if success else "FAILED"
        print(f"  {name}: {status}")


if __name__ == "__main__":
    main()
