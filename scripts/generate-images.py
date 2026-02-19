#!/usr/bin/env python3
"""
Generate B&W film grain photographs using Gemini image generation API.
Saves images to /Users/tj/torsteinkolset-site/public/
"""

import json
import base64
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

API_KEY = "YOUR_GEMINI_API_KEY_HERE"  # Get from https://aistudio.google.com/apikey
MODEL = "gemini-2.5-flash-image"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"
OUTPUT_DIR = Path("/Users/tj/torsteinkolset-site/public")

MAX_RETRIES = 3
RETRY_DELAY = 5

IMAGES = [
    {
        "filename": "hero-bg.png",
        "prompt": (
            "Cinematic wide-angle black and white photograph of a group of young "
            "creative people gathered in a large industrial loft space with exposed "
            "brick and steel beams, natural window light casting dramatic shadows, "
            "shot on Kodak Tri-X 400 film with heavy grain, 1990s editorial style "
            "photography, high contrast, no text, no watermarks"
        ),
    },
    {
        "filename": "community-bg.png",
        "prompt": (
            "Black and white documentary style photograph of diverse hands working "
            "together building something at a wooden workshop table, shot on Ilford "
            "HP5 Plus film with visible grain, 1980s documentary photography style, "
            "dramatic side lighting creating deep shadows, close-up overhead angle, "
            "no text, no watermarks"
        ),
    },
    {
        "filename": "studio-bg.png",
        "prompt": (
            "Black and white cinematic photograph of a lone figure in silhouette "
            "standing at floor-to-ceiling windows overlooking a vast cityscape below, "
            "shot on 35mm film with natural grain, 1990s cinematic style, strong rim "
            "lighting from the windows, dramatic contrast, no text, no watermarks"
        ),
    },
]


def generate_image(image_info: dict) -> dict:
    filename = image_info["filename"]
    prompt = image_info["prompt"]
    output_path = OUTPUT_DIR / filename

    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]},
    }).encode("utf-8")

    for attempt in range(1, MAX_RETRIES + 1):
        print(f"[{filename}] Attempt {attempt}/{MAX_RETRIES} -- sending request...", flush=True)
        try:
            req = urllib.request.Request(
                ENDPOINT,
                data=payload,
                headers={"Content-Type": "application/json"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=120) as resp:
                body = json.loads(resp.read().decode("utf-8"))

            parts = body["candidates"][0]["content"]["parts"]
            image_data = None
            for part in parts:
                if "inlineData" in part and part["inlineData"].get("mimeType", "").startswith("image/"):
                    image_data = part["inlineData"]["data"]
                    break

            if image_data is None:
                print(f"[{filename}] No image data in response on attempt {attempt}.", flush=True)
                if attempt < MAX_RETRIES:
                    print(f"[{filename}] Retrying in {RETRY_DELAY}s...", flush=True)
                    time.sleep(RETRY_DELAY)
                    continue
                return {"filename": filename, "success": False, "error": "No image data in API response"}

            raw = base64.b64decode(image_data)
            output_path.write_bytes(raw)
            size_kb = len(raw) / 1024
            print(f"[{filename}] Saved ({size_kb:.0f} KB) -> {output_path}", flush=True)
            return {"filename": filename, "success": True, "size_kb": size_kb}

        except (urllib.error.URLError, urllib.error.HTTPError, KeyError, json.JSONDecodeError) as e:
            print(f"[{filename}] Error on attempt {attempt}: {e}", flush=True)
            if attempt < MAX_RETRIES:
                print(f"[{filename}] Retrying in {RETRY_DELAY}s...", flush=True)
                time.sleep(RETRY_DELAY)
            else:
                return {"filename": filename, "success": False, "error": str(e)}

    return {"filename": filename, "success": False, "error": "Exhausted retries"}


def main():
    print(f"Generating {len(IMAGES)} images with Gemini ({MODEL})...", flush=True)
    print(f"Output directory: {OUTPUT_DIR}", flush=True)
    print("", flush=True)

    results = []
    with ThreadPoolExecutor(max_workers=3) as executor:
        futures = {executor.submit(generate_image, img): img["filename"] for img in IMAGES}
        for future in as_completed(futures):
            result = future.result()
            results.append(result)

    print("", flush=True)
    print("=" * 50, flush=True)
    print("RESULTS SUMMARY", flush=True)
    print("=" * 50, flush=True)
    succeeded = 0
    for r in sorted(results, key=lambda x: x["filename"]):
        if r["success"]:
            print(f"  OK   {r['filename']} ({r['size_kb']:.0f} KB)")
            succeeded += 1
        else:
            print(f"  FAIL {r['filename']} -- {r['error']}")
    print(f"")
    print(f"{succeeded}/{len(IMAGES)} images generated successfully.")


if __name__ == "__main__":
    main()
