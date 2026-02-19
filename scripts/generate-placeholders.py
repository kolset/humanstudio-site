"""Generate dramatic B&W gradient placeholder images with film grain using only PIL."""

import random
from PIL import Image, ImageFilter, ImageDraw
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public")
os.makedirs(OUTPUT_DIR, exist_ok=True)

WIDTH, HEIGHT = 1920, 1080


def add_grain(img, sigma=30):
    """Add film grain noise using PIL only."""
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            noise = int(random.gauss(0, sigma))
            val = max(0, min(255, pixels[x, y] + noise))
            pixels[x, y] = val
    return img


def create_hero():
    """Industrial loft feel — dramatic light from above-right."""
    img = Image.new("L", (WIDTH, HEIGHT), 0)
    pixels = img.load()

    for y in range(HEIGHT):
        for x in range(WIDTH):
            val = 15.0
            dx = (x / WIDTH - 0.7)
            dy = (y / HEIGHT - 0.1)
            dist = (dx * dx + dy * dy) ** 0.5
            val += max(0, 120 * (1 - dist / 0.8))
            val += 10 * (1 - y / HEIGHT)
            pixels[x, y] = int(min(val, 255))

    img = add_grain(img, sigma=25)
    img = img.filter(ImageFilter.GaussianBlur(radius=1))
    img.save(os.path.join(OUTPUT_DIR, "hero-bg.png"))
    print("Created hero-bg.png")


def create_community():
    """Workshop table — warm overhead pool of light."""
    img = Image.new("L", (WIDTH, HEIGHT), 0)
    pixels = img.load()

    cx, cy = WIDTH * 0.5, HEIGHT * 0.4

    for y in range(HEIGHT):
        for x in range(WIDTH):
            dx = (x - cx) / WIDTH
            dy = (y - cy) / HEIGHT
            dist = (dx * dx + dy * dy) ** 0.5
            val = 15 + 110 * max(0, 1 - dist / 0.5)
            edge_dist = max(abs(x / WIDTH - 0.5), abs(y / HEIGHT - 0.5)) * 2
            val *= max(0.3, 1 - edge_dist * 0.6)
            pixels[x, y] = int(min(max(val, 0), 255))

    img = add_grain(img, sigma=28)
    img = img.filter(ImageFilter.GaussianBlur(radius=1.2))
    img.save(os.path.join(OUTPUT_DIR, "community-bg.png"))
    print("Created community-bg.png")


def create_studio():
    """Silhouette at windows — bright right side, dark left."""
    img = Image.new("L", (WIDTH, HEIGHT), 0)
    pixels = img.load()

    for y in range(HEIGHT):
        for x in range(WIDTH):
            horizontal = (x / WIDTH) ** 1.5
            val = 8 + 160 * horizontal
            vert_falloff = 1 - 0.3 * abs(y / HEIGHT - 0.45)
            val *= vert_falloff
            fig_x = abs(x / WIDTH - 0.35)
            fig_y = y / HEIGHT
            if fig_x < 0.06 and 0.15 < fig_y < 0.95:
                val *= 0.15
            pixels[x, y] = int(min(max(val, 0), 255))

    img = add_grain(img, sigma=22)
    img = img.filter(ImageFilter.GaussianBlur(radius=1.5))
    img.save(os.path.join(OUTPUT_DIR, "studio-bg.png"))
    print("Created studio-bg.png")


if __name__ == "__main__":
    print("Generating placeholder images...")
    create_hero()
    create_community()
    create_studio()
    print("Done! 3 images saved to public/")
