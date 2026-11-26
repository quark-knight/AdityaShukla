/* ==============================================================
   Small enhancements only. The page works fully without JS.
   1. Dark/light toggle (remembers the choice)
   2. Mobile menu
   3. Highlights the nav link of the section on screen
   4. Footer year
   ============================================================== */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- 1. Theme toggle ---------- */
  var toggle = document.querySelector(".theme-toggle");
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.getAttribute("data-theme") || (mq.matches ? "dark" : "light");
  }
  function updateLabel() {
    if (!toggle) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      updateLabel();
    });
    if (mq.addEventListener) mq.addEventListener("change", updateLabel);
    updateLabel();
  }

  /* ---------- 2. Mobile menu ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 3. Active section in nav ---------- */
  var links = document.querySelectorAll(".nav-links a[href^='#']");
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && byId[entry.target.id]) {
          links.forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
          byId[entry.target.id].classList.add("active");
          byId[entry.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ---------- 4. Footer year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
