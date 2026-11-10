const navItems = [
  ["index.html", "首页", "Home", "home"],
  ["data.html", "数据", "Data", "data"],
  ["dagger.html", "DAgger", "DAgger", "dagger"],
  ["deployment.html", "部署", "Deployment", "deployment"],
  ["results.html", "结果", "Results", "results"],
  ["future.html", "改进方向", "Future", "future"]
];
const active = document.body.dataset.page || "";
document.querySelector("[data-header]").innerHTML = `<header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">π₀</span><span>SO-ARM101</span></a><div class="header-actions"><nav class="site-nav">${navItems.map(([href,zh,en,key]) => `<a class="${active === key ? "active" : ""}" href="${href}" data-zh="${zh}" data-en="${en}">${zh}</a>`).join("")}</nav><button class="language-toggle" data-language type="button"><b>EN</b> / 中</button></div></header>`;
document.querySelector("[data-footer]").innerHTML = `<footer><div><strong>π₀ × SO-ARM101</strong><br><span data-zh="长时序真机操作系统" data-en="Long-horizon real-robot manipulation">长时序真机操作系统</span></div><div>Python · PyTorch · LeRobot · OpenPI · Flow Matching · FSDP2 · DAgger</div></footer>`;
