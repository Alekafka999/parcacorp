// /assets/js/main.js (pode ficar vazio por enquanto; deixei um scroll suave opcional)
(function () {
  // Scroll suave para âncoras internas (se você usar #alguma-coisa depois)
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();