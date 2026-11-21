#!/usr/bin/env python3
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
PAGES = sorted(ROOT.glob("*.html"))
REQUIRED = {"index.html", "data.html", "dagger.html", "deployment.html", "results.html", "future.html", "demo.html"}

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
    assert not any(phrase in text for phrase in ("不代表", "未补充", "均来自当前项目描述", "not achieved results", "additional experimental statistic"))
    parser = Links(); parser.feed(text)
    for target in parser.targets:
        parsed = urlsplit(target)
        if parsed.scheme or parsed.netloc or not parsed.path: continue
        assert (ROOT / parsed.path).exists(), f"{page.name}: missing {target}"

home = (ROOT / "index.html").read_text(encoding="utf-8")
dagger = (ROOT / "dagger.html").read_text(encoding="utf-8")
data = (ROOT / "data.html").read_text(encoding="utf-8")
results = (ROOT / "results.html").read_text(encoding="utf-8")
deployment = (ROOT / "deployment.html").read_text(encoding="utf-8")
future = (ROOT / "future.html").read_text(encoding="utf-8")
demo = (ROOT / "demo.html").read_text(encoding="utf-8")
navigation = (ROOT / "assets/shared.js").read_text(encoding="utf-8")
assert all(v in home for v in ("50<span>%</span> → 70", "1200<span>ms</span> → 200", "0.03637"))
assert 'data-zh="请求间隔"' in home and 'data-en="Request interval"' in home and "请求延迟" not in home
assert all(v in home for v in ("面向长时序机器人操作的", "π₀ 真机在环学习", "与闭环策略优化", "π₀ Real-World-in-the-Loop Learning"))
assert "面向长时序机器人操作的 π₀ 真机在环学习与闭环策略优化" in navigation
assert "继续训练 2.5k steps" in home
assert all(v in home for v in ('data-zh="查看 RTC"', 'data-en="View RTC"')) and "查看部署优化" not in home
assert all(v in dagger for v in ("25 条", "25 real-robot corrective trajectories", "2.5k steps", "50%", "70%"))
assert all(v in results for v in ("50%", "70%", "7.5", "DAgger 数据", "25<span>条</span>", "DAgger FT", "2.5", "0.03637", "200<span>ms</span>", "demo.html"))
assert 'data-zh="请求间隔"' in results and 'data-en="Request interval"' in results and ">Latency<" not in results
assert all(v in demo for v in ("双视角真机执行", "Gripper view", "Overview", "demo-gripper-view.mp4", "demo-overview-square.mp4", "demo-gripper-view-poster.jpg", "demo-overview-square-poster.jpg", "controls", "playsinline", "30<span>Hz</span>", "≈5<span>Hz</span>", "25<span>steps</span>"))
assert "result-demo.mp4" not in demo and "result-poster.png" not in demo
assert all(v in navigation for v in ('data-zh="首页"', 'data-en="Home"', 'data-zh="任务、数据"', 'data-zh="实验"', 'data-zh="结果"', 'data-zh="演示"', 'data-zh="改进方向"', 'data-en="Future work"', 'href="future.html#dsrl"', 'href="future.html#rl-token"', 'href="future.html#recap"', 'href="future.html#gr-rl"', 'href="future.html#adaptive-gravity-compensation"', 'data-zh="DSRL"', 'data-zh="RL Token"', 'data-zh="RECAP"', 'data-zh="GR-RL"', 'data-zh="自适应重力补偿"', 'data-en="Adaptive gravity compensation"', "nav-dropdown-menu"))
assert '["deployment.html", "RTC", "RTC", "deployment"]' in navigation and "部署优化" not in navigation
assert '["future.html", "DSRL", "DSRL", "future"]' not in navigation and navigation.index('data-zh="演示"') < navigation.index('data-zh="改进方向"') < navigation.index('href="future.html#dsrl"')
assert '["data.html", "数据处理"' not in navigation
assert all(v in data for v in ("1.1 / TASK", "1.2 / DATA COLLECTION &amp; FILTERING", "SEQUENTIAL PICK &amp; STACK", "Leader / Follower", "红色物块", "蓝色物块", "指定平台", "sequential_object_stack", "episode_2", "34,717", "30<em>FPS</em>", "23.63<em>s</em>", "708 frames", "assets/media/episode-2-front.mp4", "assets/media/episode-2-side.mp4", "controls", "playsinline"))
assert "积木" not in data and "瓶盖" not in data
assert "huggingface.co" not in data and "hf.space" not in data and "<iframe" not in data
assert all(v in deployment for v in ("LEROBOT · ALIGNED BLEND", "ROLLING ACTION EXECUTOR", "action cursor", "elapsed × fps", "81b8c5b"))
assert "<title>RTC ·" in deployment and "<title>部署优化 ·" not in deployment
assert all(v in deployment for v in ("WHY RECEDING HORIZON", "SERIAL · BLOCKING", "ROLLING · TWO THREADS", "N=floor(elapsed×fps)", "EXEC_HORIZON=None"))
assert all(v in deployment for v in ("消除推理等待", "Remove inference pauses", "消除动作块交界抖动", "Remove chunk-transition jitter", "blend-preview"))
assert "连续推理请求的间隔由约 1200ms 缩短至 200ms" in deployment and "请求等待由 1200ms" not in deployment
assert "LEROBOT OFFICIAL ALIGNMENT" not in deployment and "cursor = 120" not in deployment
assert all(v in deployment for v in ("DEPLOYMENT ARCHITECTURE", "LOCAL · UBUNTU", "SSH TUNNEL · WEBSOCKET", "COMPUTE CENTER", "about 25 steps"))
assert all(v in deployment for v in ("复用 π₀ 训练环境", "Reuse the π₀ training environment", "deploy.pi0"))
assert "lingbot-vla-v2" not in deployment and "deploy.lingbot_vla_v2" not in deployment
assert "FUTURE DIRECTION · REAL-TIME EXPO-FT" not in deployment
assert all(v in future for v in ("<title>DSRL ·", "06 / DSRL", 'id="dsrl"', 'id="rl-token"', 'id="recap"', 'id="gr-rl"', 'id="adaptive-gravity-compensation"', "RL POST-TRAINING", "RL Token", "RECAP", "GR-RL", "2604.23073", "2511.14759", "2512.01801", "DATA IMPROVEMENT", "多场景采集", "高质量示范", "Multi-scene collection", "High-quality demonstrations", "ADAPTIVE GRAVITY COMPENSATION", "自适应重力补偿", "Adaptive gravity compensation", "在线估计负载", "限幅与失效回退", "REAL-TIME EXPO-FT", "π₀ 生成候选", "Residual 修正", "Q 选择并执行", "P3 · VERY HIGH", "2609.18207"))
assert (ROOT / "assets/media/result-demo.mp4").stat().st_size > 100_000
assert (ROOT / "assets/media/result-poster.png").stat().st_size > 10_000
assert (ROOT / "assets/media/demo-gripper-view.mp4").stat().st_size > 100_000
assert (ROOT / "assets/media/demo-overview-square.mp4").stat().st_size > 100_000
assert (ROOT / "assets/media/demo-gripper-view-poster.jpg").stat().st_size > 5_000
assert (ROOT / "assets/media/demo-overview-square-poster.jpg").stat().st_size > 5_000
print(f"verified {len(PAGES)} pages and all local links")
