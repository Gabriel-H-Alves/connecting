import cv2
import numpy as np
from PIL import Image

def main():
    src_path = r"C:\Users\gabri\.gemini\antigravity\brain\b81bff5b-fa33-4d7e-9935-39335d058ed0\.user_uploaded\media_1793632108308_66979775.jpg"
    src_img = Image.open(src_path).convert("L")
    arr = np.array(src_img)

    # Clean mask: keep only logo pixels (> 248)
    mask = (arr > 248).astype(np.uint8) * 255
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)

    # Filter to 4 primary contours
    filtered_contours = []
    for i, c in enumerate(contours):
        if cv2.contourArea(c) > 5000:
            filtered_contours.append((c, hierarchy[0][i]))

    print(f"Filtered contours: {len(filtered_contours)}")

    # Generate smooth SVG path
    paths = []
    for c, hier in filtered_contours:
        pts = c.reshape(-1, 2)
        d = f"M {pts[0][0]} {pts[0][1]} " + " ".join(f"L {x} {y}" for x, y in pts[1:]) + " Z"
        paths.append(d)

    combined_d = " ".join(paths)

    # 1. Generate favicon.svg (Adaptive with sleek dark squircle background for high contrast in all tabs)
    # The logo sits at [103, 74, 893, 950] -> width ~790, height ~876, centered at (498, 512).
    # In a 1024x1024 viewBox, it has natural padding of ~65px, perfect for a squircle tile.
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="100%" height="100%">
  <defs>
    <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
  </defs>
  <!-- Sleek rounded squircle background ensuring high contrast on any browser theme -->
  <rect width="1024" height="1024" rx="224" fill="url(#tileGrad)"/>
  <rect width="1020" height="1020" x="2" y="2" rx="222" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="4"/>
  <!-- Connecting 3D Isometric Cube Logo -->
  <path d="{combined_d}" fill="#ffffff" fill-rule="evenodd"/>
</svg>'''

    with open(r"C:\dev-projetos\connecting\public\favicon.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Generated public/favicon.svg")

    # 2. Generate crisp PNG assets:
    # Render 1024x1024 RGBA image
    # Background: dark squircle
    tile = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
    # We can draw the squircle and mask
    from PIL import ImageDraw
    draw = ImageDraw.Draw(tile)
    draw.rounded_rectangle([0, 0, 1023, 1023], radius=224, fill=(15, 15, 18, 255), outline=(255, 255, 255, 36), width=4)

    # Mask for white logo
    mask_clean = np.zeros_like(mask)
    for c, _ in filtered_contours:
        cv2.drawContours(mask_clean, [c], -1, 255, -1)
    # Punch hole
    for c, hier in filtered_contours:
        if hier[3] != -1:
            cv2.drawContours(mask_clean, [c], -1, 0, -1)

    logo_fg = Image.new("RGBA", (1024, 1024), (255, 255, 255, 255))
    logo_alpha = Image.fromarray(mask_clean)
    logo_fg.putalpha(logo_alpha)

    # Composite logo onto tile
    final_tile = Image.alpha_composite(tile, logo_fg)

    # Save sizes
    # apple-touch-icon.png (180x180)
    apple_icon = final_tile.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(r"C:\dev-projetos\connecting\public\apple-touch-icon.png", "PNG")

    # favicon-32x32.png
    fav32 = final_tile.resize((32, 32), Image.Resampling.LANCZOS)
    fav32.save(r"C:\dev-projetos\connecting\public\favicon-32x32.png", "PNG")

    # favicon-16x16.png
    fav16 = final_tile.resize((16, 16), Image.Resampling.LANCZOS)
    fav16.save(r"C:\dev-projetos\connecting\public\favicon-16x16.png", "PNG")

    # favicon.ico (multi-resolution 16, 32, 48, 64)
    fav48 = final_tile.resize((48, 48), Image.Resampling.LANCZOS)
    fav48.save(
        r"C:\dev-projetos\connecting\public\favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )

    # Also save transparent version of the white logo
    transparent_logo = Image.new("RGBA", (1024, 1024), (255, 255, 255, 0))
    transparent_logo.paste((255, 255, 255, 255), (0, 0), logo_alpha)
    transparent_logo.save(r"C:\dev-projetos\connecting\public\logo-transparent.png", "PNG")

    print("Generated all favicon formats successfully!")

if __name__ == "__main__":
    main()

