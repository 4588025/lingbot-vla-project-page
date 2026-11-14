const active = document.body.dataset.page || "";
const experimentItems = [
  ["dagger.html", "DAgger 纠偏", "DAgger correction", "dagger"],
  ["deployment.html", "部署优化", "Deployment", "deployment"],
  ["future.html", "DSRL", "DSRL", "future"]
];
const experimentActive = experimentItems.some(([, , , key]) => active === key);

document.querySelector("[data-header]").innerHTML = `
  <header class="site-header">
    <a class="brand" href="index.html"><span class="brand-mark">π₀</span><span>SO-ARM101</span></a>
    <div class="header-actions">
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="${active === "home" ? "active" : ""}" href="index.html" data-zh="首页" data-en="Home">首页</a>
        <a class="${active === "data" ? "active" : ""}" href="data.html" data-zh="任务、数据" data-en="Task & Data">任务、数据</a>
        <div class="nav-dropdown ${experimentActive ? "active" : ""}">
          <button class="nav-dropdown-trigger" type="button" aria-expanded="false">
            <span data-zh="实验" data-en="Experiments">实验</span><i aria-hidden="true">⌄</i>
          </button>
          <div class="nav-dropdown-menu">
            ${experimentItems.map(([href, zh, en, key], index) => `
              <a class="${active === key ? "active" : ""}" href="${href}">
                <b>0${index + 1}</b><span data-zh="${zh}" data-en="${en}">${zh}</span>
              </a>`).join("")}
          </div>
        </div>
        <a class="${active === "results" ? "active" : ""}" href="results.html" data-zh="结果" data-en="Results">结果</a>
        <a class="${active === "demo" ? "active" : ""}" href="demo.html" data-zh="演示" data-en="Demo">演示</a>
      </nav>
      <button class="language-toggle" data-language type="button"><b>EN</b> / 中</button>
    </div>
  </header>`;

document.querySelector("[data-footer]").innerHTML = `<footer><div><strong data-zh="面向长时序机器人操作的 π₀ 真机在环学习与闭环策略优化" data-en="π₀ Real-World-in-the-Loop Learning and Closed-Loop Policy Optimization for Long-Horizon Robot Manipulation">面向长时序机器人操作的 π₀ 真机在环学习与闭环策略优化</strong><br><span>π₀ · DAgger · SO-ARM101</span></div><div>Python · PyTorch · LeRobot · OpenPI · Flow Matching · FSDP2 · DAgger</div></footer>`;
