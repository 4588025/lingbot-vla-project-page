#!/usr/bin/env python3
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
PAGES = sorted(ROOT.glob("*.html"))
REQUIRED = {"index.html", "data.html", "dagger.html", "deployment.html", "results.html", "future.html"}

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.targets = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for key in ("href", "src"):
            if values.get(key): self.targets.append(values[key])

assert REQUIRED == {p.name for p in PAGES}
for page in PAGES:
    text = page.read_text(encoding="utf-8")
    assert "data-header" in text and "data-footer" in text and "data-language" not in text
    parser = Links(); parser.feed(text)
    for target in parser.targets:
        parsed = urlsplit(target)
        if parsed.scheme or parsed.netloc or not parsed.path: continue
        assert (ROOT / parsed.path).exists(), f"{page.name}: missing {target}"

home = (ROOT / "index.html").read_text(encoding="utf-8")
dagger = (ROOT / "dagger.html").read_text(encoding="utf-8")
results = (ROOT / "results.html").read_text(encoding="utf-8")
deployment = (ROOT / "deployment.html").read_text(encoding="utf-8")
future = (ROOT / "future.html").read_text(encoding="utf-8")
assert all(v in home for v in ("50<span>%</span> → 70", "1200<span>ms</span> → 200", "0.03637"))
assert "继续训练 2.5k steps" in home
assert all(v in dagger for v in ("25 条", "25 real-robot corrective trajectories", "2.5k steps", "50%", "70%"))
assert all(v in results for v in ("50%", "70%", "7.5", "DAgger 数据", "25<span>条</span>", "DAgger FT", "2.5", "0.03637", "200<span>ms</span>", "future.html"))
assert all(v in results for v in ("result-demo.mp4", "result-poster.png", "controls", "playsinline"))
assert all(v in deployment for v in ("LEROBOT · ALIGNED BLEND", "ROLLING ACTION EXECUTOR", "action cursor", "elapsed × fps", "81b8c5b"))
assert all(v in deployment for v in ("WHY RECEDING HORIZON", "SERIAL · BLOCKING", "ROLLING · TWO THREADS", "N=floor(elapsed×fps)", "EXEC_HORIZON=None"))
assert all(v in deployment for v in ("LEROBOT OFFICIAL ALIGNMENT", "cursor = 120", "cursor = 126", "trim = 126 − 120 = 6", "current_cursor − anchor", "absolute = relative + cached_state", "_accept_aligned"))
assert all(v in deployment for v in ("DEPLOYMENT ARCHITECTURE", "LOCAL · UBUNTU", "SSH TUNNEL · WEBSOCKET", "COMPUTE CENTER", "about 25 steps"))
assert all(v in deployment for v in ("复用 π₀ 训练环境", "Reuse the π₀ training environment", "deploy.pi0"))
assert "lingbot-vla-v2" not in deployment and "deploy.lingbot_vla_v2" not in deployment
assert "FUTURE DIRECTION · REAL-TIME EXPO-FT" not in deployment
assert all(v in future for v in ("REAL-TIME EXPO-FT", "π₀ 生成候选", "Residual 修正", "Q 选择并执行", "P3 · VERY HIGH", "2609.18207"))
assert (ROOT / "assets/media/result-demo.mp4").stat().st_size > 100_000
assert (ROOT / "assets/media/result-poster.png").stat().st_size > 10_000
print(f"verified {len(PAGES)} pages and all local links")
