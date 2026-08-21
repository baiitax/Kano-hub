#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/home/user/kanohub")
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"
PUBLIC.mkdir(exist_ok=True)


def mark(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = max(8, size // 5)
    # rounded rect emerald
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=r, fill=(4, 120, 87, 255))
    # gold roof
    pad = size * 0.16
    peak = size * 0.12
    d.polygon(
        [(pad, size * 0.36), (size / 2, peak), (size - pad, size * 0.36), (size - pad, size * 0.42), (pad, size * 0.42)],
        fill=(251, 191, 36, 255),
    )
    # KH
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", int(size * 0.38))
    except Exception:
        font = ImageFont.load_default()
    text = "KH"
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((size - tw) / 2, size * 0.48), text, font=font, fill=(255, 255, 255, 255))
    return img


def main():
    big = mark(512)
    big.save(PUBLIC / "kanohub-icon.png")
    mark(192).save(PUBLIC / "icon-192.png")
    mark(32).save(PUBLIC / "favicon-32.png")
    ico = mark(64)
    ico.save(APP / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    mark(180).save(APP / "apple-icon.png")
    mark(32).save(APP / "icon.png")
    print("icons written")


if __name__ == "__main__":
    main()
