// /assets/js/nav.js
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const path = (window.location.pathname || "").toLowerCase();
  const map = [
    { key: "inicio", match: ["/", "/index.html"] },
    { key: "consultoria", match: ["/consultoria.html"] },
    { key: "colecao", match: ["/colecao.html"] },
    { key: "manifesto", match: ["/manifesto.html"] },
    { key: "lab", match: ["/lab.html"] },
    { key: "contato", match: ["/contato.html"] },
  ];

  const active = map.find(item => item.match.some(m => path.endsWith(m)));
  if (active) {
    const el = document.querySelector(`[data-nav="${active.key}"]`);
    if (el) el.classList.add("is-active");
  }

  const header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    });
  }
})();