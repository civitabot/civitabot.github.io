"""Web sitesinin görsellerini Civita'nın kendi çizim motoruyla üretir.

Çalıştırmak için (proje klasöründe):  .venv\\Scripts\\python site\\make_images.py
Şehir çizimi değişirse bu betik yeniden çalıştırılır; resimler site/img/ altına yazılır.
"""

import io
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from civita.city.card import render_welcome_card  # noqa: E402
from civita.city.render import Scene, render_city  # noqa: E402

OUT = Path(__file__).resolve().parent / "img"
SEED = 20260924  # sitedeki örnek şehir her seferinde aynı görünsün

GROWN = {"forum": 3, "quarry": 3, "olive_grove": 3, "agora": 3, "amphitheatre": 3, "triumphal_arch": 4}
YOUNG = {"forum": 1, "quarry": 1, "olive_grove": 0, "agora": 0, "amphitheatre": 0}


def levels(values: dict[str, int]) -> tuple[tuple[str, int], ...]:
    return tuple(sorted(values.items()))


def save(name: str, png: bytes) -> None:
    (OUT / name).write_bytes(png)
    print("yazıldı:", name, len(png) // 1024, "KB")


def sample_avatar() -> bytes:
    """Gerçek kimseye ait olmayan, soyut bir profil resmi."""
    image = Image.new("RGB", (256, 256), (79, 138, 139))
    draw = ImageDraw.Draw(image)
    for i in range(6):
        angle = math.radians(i * 60)
        x, y = 128 + 60 * math.cos(angle), 128 + 60 * math.sin(angle)
        draw.ellipse([x - 38, y - 38, x + 38, y + 38], fill=(222, 178, 74) if i % 2 else (239, 233, 221))
    draw.ellipse([88, 88, 168, 168], fill=(178, 92, 62))
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    return buffer.getvalue()


def main() -> None:
    OUT.mkdir(exist_ok=True)
    hero = render_city(Scene(SEED, levels(GROWN), None, 0.0, 16, 11, festive=True))
    save("hero.png", hero)
    save("young.png", render_city(Scene(SEED, levels(YOUNG), "olive_grove", 0.6, 3, 9)))
    save("dusk.png", render_city(Scene(SEED, levels({**GROWN, "triumphal_arch": 0}), "triumphal_arch", 0.4, 10, 18)))
    save("night.png", render_city(Scene(SEED, levels(GROWN), None, 0.0, 12, 22, decor="fireworks")))
    save("welcome.png", render_welcome_card(render_city(Scene(SEED, levels(GROWN), None, 0.0, 10, 17)), sample_avatar()))

    # Bağlantı önizlemesi (Discord, WhatsApp vb.) için 1200×630
    og = Image.open(io.BytesIO(hero)).crop((0, 5, 1200, 635))
    buffer = io.BytesIO()
    og.save(buffer, format="PNG", optimize=True)
    save("og.png", buffer.getvalue())


if __name__ == "__main__":
    main()
