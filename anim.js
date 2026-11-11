// Apparitions au défilement : un bloc s'anime tout seul (une seule fois) dès qu'il arrive à l'écran.
// Sans ce script, ou si l'ordinateur demande moins d'animations, tout reste simplement affiché.
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var root = document.documentElement;
  root.classList.add("anim");
  document.addEventListener("DOMContentLoaded", function () {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("vu"); seen.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-l, .reveal-r, .mascot, .checks li").forEach(function (el) { seen.observe(el); });
  });
})();
