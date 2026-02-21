# Video Generation Prompts — Alive Studio Austin

Use these prompts with **Runway Gen-3 Alpha Turbo**, **Kling 1.6**, **Sora**, or **Minimax Hailuo**.
Generate at **16:9**, **10 seconds** minimum, highest quality available.
Save as `.mp4` and place in `/public/`.

---

## 1. Hero Background → `hero-bg.mp4`

**Scene:** A raw industrial creative studio at golden hour

**Prompt:**

```
Slow cinematic dolly forward through a vast industrial loft studio. Concrete floors, exposed steel beams, floor-to-ceiling warehouse windows on the far wall. Late afternoon sun pours through the glass, casting long dramatic shafts of golden light across the space. Thick dust particles drift lazily through the light beams. A large wooden worktable sits center-frame with scattered architectural sketches, a matte black laptop, and a ceramic coffee mug. The camera glides forward at a meditative pace, barely moving. Shadows are deep and rich. The atmosphere feels alive — contemplative, charged with creative potential. Shot on 35mm Kodak Vision3 500T film stock, shallow depth of field, anamorphic lens flare from the windows, desaturated warm tones verging on monochrome. No people visible. No text or watermarks.
```

**Alt prompt (darker/moodier):**

```
Extreme slow-motion overhead shot looking down at a concrete studio floor. A single bare Edison bulb swings gently on a long cord, casting sweeping arcs of warm light across the raw surface. Shadows move like a slow pendulum. Dust particles catch the light as it passes. The floor shows paint splatters, pencil marks, and the worn patina of years of creative work. The mood is hypnotic, almost sacred — a space between creation and stillness. Shot on ARRI Alexa, 120fps, shallow depth of field. Desaturated tones, high contrast, cinematic grain. No people. No text or watermarks.
```

---

## 2. Community Background → `community-bg.mp4`

**Scene:** Hands collaborating around a workshop table

**Prompt:**

```
Tight overhead shot of a large reclaimed-wood table where four pairs of hands are working together. Hands sketch with charcoal pencils on butcher paper, arrange physical wireframe cards, point at details, pass a ceramic cup. The movement is unhurried and purposeful. Warm sidelight from a single source illuminates the hands and materials, leaving the edges of frame in deep shadow. You can feel the quiet intensity of focused collaboration. Camera holds steady with only the subtlest breathing movement. Shot on Kodak Tri-X 400 film pushed to 800, heavy analog grain, black and white, rich midtones. Close-up scale — only hands, forearms, and the work surface visible. No faces. No text or watermarks.
```

**Alt prompt (more atmospheric):**

```
Slow tracking shot across a long communal table in a dimly lit workshop. Multiple people sit shoulder to shoulder — we see only their torsos, hands, and the work in front of them. Sketchbooks, prototypes, sticky notes, tools. Hands reach across the table passing materials. Someone's hand taps a pencil rhythmically. Warm tungsten light from overhead industrial pendants creates pools of light separated by shadow. Steam rises gently from coffee cups. The mood is intimate and purposeful — a band of builders in deep flow. Shot on 16mm Bolex, slight camera sway, heavy film grain, muted sepia-to-monochrome tones. No direct eye contact with camera. No text or watermarks.
```

---

## 3. Founder Background → `studio-bg.mp4`

**Scene:** A solitary figure silhouetted against dramatic windows

**Prompt:**

```
Wide shot from behind and slightly below — a single man stands silhouetted before a massive wall of industrial windows. He faces outward, hands at his sides, contemplating the cityscape beyond. The windows stretch from floor to ceiling, filling the frame with diffused white light. The figure is a near-perfect silhouette — shoulders relaxed, posture grounded. Atmospheric haze softens the light into a luminous glow around his outline. The camera is completely still except for a barely perceptible slow push-in. Dust motes float in the light like suspended time. The feeling is monumental solitude — a builder surveying what's next. Shot on ARRI Alexa with Cooke S4 lenses, shallow depth of field on the figure, anamorphic bokeh on the windows. High contrast, desaturated to near-monochrome with faint warm undertones. No text or watermarks.
```

**Alt prompt (more kinetic):**

```
Slow-motion profile shot of a man walking through an empty industrial space. He moves left to right through alternating columns of light and shadow cast by tall evenly-spaced windows. Each step carries him from darkness into a blade of light and back into shadow. His silhouette is crisp against the bright window light — we see his outline, the set of his jaw, but no detail. The rhythm is meditative and cinematic. A subtle lens flare blooms each time he passes a window. Shot on 35mm film, Panavision anamorphic, 96fps slow motion. High contrast black and white, deep blacks, blown-out highlights. The look of a 1990s Wim Wenders film. No text or watermarks.
```

---

## Tips for Best Results

- **Runway Gen-3:** Use "Camera: Slow Dolly" or "Camera: Static" motion presets. Set style to "Film Noir" or "Cinematic" if available.
- **Kling 1.6:** Use "Professional" mode, 10s duration, "Cinematic" style.
- **Sora:** Paste the full prompt. Sora handles long descriptive prompts well.
- **Minimax Hailuo:** Use the shorter alt prompts — Hailuo works best with concise descriptions.
- **Post-processing:** If the output has color, desaturate to 80-90% in any video editor. Add a subtle vignette and 2-3% film grain if missing.
- **Looping:** Use a video editor to crossfade the last 1-2 seconds into the first 1-2 seconds for a seamless loop. Or generate a longer clip and trim to a naturally looping segment.
- **File size:** Compress to H.264, target 4-8 MB per clip for fast web loading. Use `ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -an output.mp4` (the `-an` strips audio since videos are muted).
