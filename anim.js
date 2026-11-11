// Apparitions au défilement : un bloc s'anime tout seul quand il arrive à l'écran, et se cache quand il en sort
// (pour se rejouer au prochain passage, en montant comme en descendant).
// Sans ce script, ou si l'ordinateur demande moins d'animations, tout reste simplement affiché.
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("anim");
  document.addEventListener("DOMContentLoaded", function () {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var el = e.target;
        if (e.isIntersecting) {
          el.classList.add("vu");
          el.classList.remove("haut");
        } else {
          el.classList.remove("vu");
          // sorti par le haut : il reviendra d'en haut
          el.classList.toggle("haut", e.boundingClientRect.top < 0);
        }
      });
    }, { rootMargin: "-6% 0px -12% 0px", threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-l, .reveal-r, .mascot, .checks li").forEach(function (el) { seen.observe(el); });
  });
})();
