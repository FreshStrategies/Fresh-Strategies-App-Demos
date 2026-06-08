/* ============================================================
   Fresh Strategies — Shared demo helpers (vanilla JS)
   Tabs, drawers, toasts, role-switch, reset. No dependencies.
   ============================================================ */
(function () {
  "use strict";

  // --- Tabs: any [data-tabs] container with .tab[data-panel] + .panel#id ---
  document.addEventListener("click", function (e) {
    var tab = e.target.closest("[data-panel]");
    if (tab) {
      var scope = tab.closest("[data-tabs]") || document;
      scope.querySelectorAll("[data-panel]").forEach(function (t) {
        if (t.closest("[data-tabs]") === tab.closest("[data-tabs]")) t.classList.remove("active");
      });
      tab.classList.add("active");
      var target = tab.getAttribute("data-panel");
      scope.querySelectorAll(".panel").forEach(function (p) {
        if (p.closest("[data-tabs]") === tab.closest("[data-tabs]") || scope === document) {
          p.classList.toggle("active", p.id === target);
        }
      });
      if (typeof window.onTabChange === "function") window.onTabChange(target);
    }

    // --- Drawer open via [data-drawer-open="drawerId"] ---
    var opener = e.target.closest("[data-drawer-open]");
    if (opener) {
      FS.openDrawer(opener.getAttribute("data-drawer-open"));
    }
    // --- Drawer close ---
    if (e.target.closest("[data-drawer-close]") || e.target.classList.contains("drawer-back")) {
      FS.closeDrawer();
    }

    // --- Reset button ---
    if (e.target.closest("[data-reset]")) {
      if (typeof window.resetDemo === "function") window.resetDemo();
      else location.reload();
    }
  });

  var FS = {
    toast: function (msg) {
      var t = document.getElementById("fs-toast");
      if (!t) {
        t = document.createElement("div");
        t.id = "fs-toast";
        t.className = "toast";
        document.body.appendChild(t);
      }
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(t._timer);
      t._timer = setTimeout(function () { t.classList.remove("show"); }, 2200);
    },
    openDrawer: function (id) {
      var d = document.getElementById(id);
      var back = document.getElementById("drawer-back");
      if (back) back.classList.add("open");
      if (d) d.classList.add("open");
    },
    closeDrawer: function () {
      document.querySelectorAll(".drawer.open").forEach(function (d) { d.classList.remove("open"); });
      var back = document.getElementById("drawer-back");
      if (back) back.classList.remove("open");
    },
    money: function (n) {
      var s = n < 0 ? "-" : "";
      return s + "$" + Math.abs(Number(n)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    money0: function (n) {
      var s = n < 0 ? "-" : "";
      return s + "$" + Math.abs(Number(n)).toLocaleString("en-US", { maximumFractionDigits: 0 });
    },
    esc: function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    },
    initials: function (name) {
      return name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
    }
  };

  document.addEventListener("keydown", function (e) { if (e.key === "Escape") FS.closeDrawer(); });

  window.FS = FS;
})();
