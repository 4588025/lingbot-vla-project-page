#!/usr/bin/env python3
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
PAGES = sorted(ROOT.glob("*.html"))
REQUIRED = {"index.html", "data.html", "dagger.html", "deployment.html", "results.html"}

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
results = (ROOT / "results.html").read_text(encoding="utf-8")
assert all(v in home for v in ("50<span>%</span> → 70", "1200<span>ms</span> → 200", "0.03637"))
assert all(v in results for v in ("50%", "70%", "7.5", "0.03637", "200<span>ms</span>"))
print(f"verified {len(PAGES)} pages and all local links")
