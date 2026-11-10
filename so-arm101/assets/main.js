const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));

const toggle = document.querySelector("[data-language]");
const stored = localStorage.getItem("soarm-language") || "zh";
function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-zh][data-en]").forEach((node) => {
    node.textContent = node.dataset[lang];
  });
  if (toggle) toggle.innerHTML = lang === "zh" ? "<b>EN</b> / 中" : "<b>中</b> / EN";
  localStorage.setItem("soarm-language", lang);
}
applyLanguage(stored);
toggle?.addEventListener("click", () => applyLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh"));

const dropdown = document.querySelector(".nav-dropdown");
const dropdownTrigger = document.querySelector(".nav-dropdown-trigger");
function setDropdown(open) {
  dropdown?.classList.toggle("open", open);
  dropdownTrigger?.setAttribute("aria-expanded", String(open));
}
dropdownTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  setDropdown(!dropdown?.classList.contains("open"));
});
document.addEventListener("click", (event) => {
  if (dropdown && !dropdown.contains(event.target)) setDropdown(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setDropdown(false);
});
