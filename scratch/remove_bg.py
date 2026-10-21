import sys
from PIL import Image
import numpy as np
from collections import deque
import os

def remove_white_background(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    h, w, c = arr.shape
    
    # We want to identify background pixels starting from the corners/edges
    # A pixel is considered "white background" if R > tolerance, G > tolerance, B > tolerance
    # We use BFS flood fill from all 4 borders
    visited = np.zeros((h, w), dtype=bool)
    is_bg = np.zeros((h, w), dtype=bool)
    
    queue = deque()
    
    # Check if a pixel is near-white
    def is_white(r, g, b):
        return r >= tolerance and g >= tolerance and b >= tolerance
    
    # Seed all border pixels that are near-white
    for x in range(w):
        for y in [0, h - 1]:
            r, g, b, a = arr[y, x]
            if is_white(r, g, b) and not visited[y, x]:
                visited[y, x] = True
                is_bg[y, x] = True
                queue.append((y, x))
                
    for y in range(h):
        for x in [0, w - 1]:
            r, g, b, a = arr[y, x]
            if is_white(r, g, b) and not visited[y, x]:
                visited[y, x] = True
                is_bg[y, x] = True
                queue.append((y, x))
                
    # BFS
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    while queue:
        cy, cx = queue.popleft()
        for dy, dx in directions:
            ny, nx = cy + dy, cx + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                r, g, b, a = arr[ny, nx]
                if is_white(r, g, b):
                    visited[ny, nx] = True
                    is_bg[ny, nx] = True
                    queue.append((ny, nx))
                    
    # Now set alpha of all is_bg pixels to 0
    arr[is_bg, 3] = 0
    
    # Optional edge feathering for smooth antialiasing:
    # Any non-bg pixel adjacent to bg pixel with high brightness gets subtle alpha blending
    result = Image.fromarray(arr, "RGBA")
    
    # Crop to bounding box of non-transparent pixels with nice padding
    bbox = result.getbbox()
    if bbox:
        # Add 20px padding
        pad = 20
        x1 = max(0, bbox[0] - pad)
        y1 = max(0, bbox[1] - pad)
        x2 = min(w, bbox[2] + pad)
        y2 = min(h, bbox[3] + pad)
        result = result.crop((x1, y1, x2, y2))
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    result.save(output_path, "PNG")
    print(f"Saved: {output_path} (size: {result.size})")

if __name__ == "__main__":
    images = [
        ("public/images/Leather WebP/11dc7b26-571a-4c9c-98fb-4d7b1f27979a.webp", "public/images/hero/hero-leather-patch.png"),
        ("public/images/embroidery/embroidered-big-rig-patch.webp", "public/images/hero/hero-embroidery-patch.png"),
        ("public/images/Chennile WebP/37612dd6-9e4f-40a9-b1d8-f6fe661351c7.webp", "public/images/hero/hero-chenille-patch.png"),
        ("public/images/PVC WebP/0593e5cd-dc2a-4e46-bb61-e5def04a98ab.webp", "public/images/hero/hero-pvc-patch.png"),
    ]
    for inp, outp in images:
        remove_white_background(inp, outp)
