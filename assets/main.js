const state = { data: null, setting: "clean" };

const formatTask = (name) => name.replaceAll("_", " ");

function taskMetric(row, setting) {
  if (setting === "gap") {
    return {
      value: row.cleanRate - row.randomRate,
      label: `${(row.cleanRate - row.randomRate).toFixed(1)} pp`,
    };
  }
  const value = setting === "clean" ? row.cleanRate : row.randomRate;
  return { value, label: `${value.toFixed(1)}%` };
}

function renderTasks() {
  const host = document.querySelector("#task-list");
  if (!host || !state.data) return;

  const rows = [...state.data.tasks]
    .map((row) => ({ ...row, metric: taskMetric(row, state.setting) }))
    .sort((a, b) => b.metric.value - a.metric.value);

  const max = state.setting === "gap"
    ? Math.max(...rows.map((row) => row.metric.value), 1)
    : 100;

  host.innerHTML = rows.map((row) => {
    const width = Math.max(0, Math.min(100, row.metric.value / max * 100));
    return `
      <div class="task-item" title="${formatTask(row.task)}">
        <span class="task-name">${row.task}</span>
        <span class="task-bar"><span style="--task-score:${width}%"></span></span>
        <strong class="task-value">${row.metric.label}</strong>
      </div>`;
  }).join("");
}

async function loadResults() {
  try {
    const response = await fetch("assets/data/results.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    renderTasks();
  } catch (error) {
    const host = document.querySelector("#task-list");
    if (host) host.innerHTML = `<p class="loading">Task results could not be loaded: ${error.message}</p>`;
  }
}

document.querySelectorAll("[data-setting]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-setting]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.setting = button.dataset.setting;
    renderTasks();
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
loadResults();
