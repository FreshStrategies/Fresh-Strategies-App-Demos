/* Fresh Strategies — landing page renderer */
(function () {
  "use strict";

  // ---- Inline icon set (stroke-based, 24x24) ----
  var ICON = {
    truck: '<path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    "check-shield": '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 11.5l2 2 4-4"/>',
    sprout: '<path d="M12 20v-7"/><path d="M12 13C9 13 6 11 6 7c4 0 6 2 6 6z"/><path d="M12 11c0-4 2-6 6-6 0 4-3 6-6 6z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    receipt: '<path d="M5 3h14v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3L5 21z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    tag: '<path d="M3 12l9-9h7v7l-9 9z"/><circle cx="15.5" cy="8.5" r="1.5"/>',
    "hard-hat": '<path d="M3 17a9 9 0 0118 0"/><path d="M10 8V5h4v3"/><path d="M2 17h20v2H2z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chart: '<path d="M4 4v16h16"/><path d="M8 14l3-3 2 2 4-5"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    palette: '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="15.5" cy="10" r="1"/><path d="M12 21a3 3 0 010-6h1a2 2 0 002-2"/>',
    database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    plug: '<path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 01-10 0z"/><path d="M12 16v6"/>',
    robot: '<rect x="4" y="8" width="16" height="11" rx="2"/><path d="M12 8V4M9 13h.01M15 13h.01M9 16h6"/>',
    rocket: '<path d="M5 15c-1 1-1 4-1 4s3 0 4-1m6-12a8 8 0 00-9 9l3 3a8 8 0 009-9 6 6 0 00-3-3z"/><circle cx="14.5" cy="9.5" r="1.5"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[name] || '') + '</svg>';
  }

  var SECTOR_LABEL = { ag: "Agriculture", elec: "Electrical", fin: "Finance" };

  function cardPreview(app) {
    // pure-CSS mini mockup tinted by sector
    return '<div class="app-card__preview" style="--accent:var(--sector-' + app.sector + '); --accent-soft:var(--sector-' + app.sector + '-soft)">' +
      '<span class="app-card__chip">' + SECTOR_LABEL[app.sector] + '</span>' +
      '<div class="mini">' +
        '<div class="mini__bar"><i></i><i></i><i></i></div>' +
        '<div class="mini__body">' +
          '<div class="mini__row hi l"></div>' +
          '<div class="mini__cards"><div class="mini__tile accent"></div><div class="mini__tile"></div></div>' +
          '<div class="mini__row m"></div><div class="mini__row s"></div>' +
        '</div>' +
      '</div>' +
      '<div style="position:absolute;top:14px;right:14px;color:var(--accent);opacity:.85">' + icon(app.icon) + '</div>' +
    '</div>';
  }

  function appCard(app) {
    var tags = app.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
    return '<article class="app-card" style="--accent:var(--sector-' + app.sector + '-soft)">' +
      cardPreview(app) +
      '<div class="app-card__body">' +
        '<h4>' + app.title + '</h4>' +
        '<p class="app-card__ns app-card__need"><b>Need.</b> ' + app.need + '</p>' +
        '<p class="app-card__ns app-card__solve"><b>Solve.</b> ' + app.solve + '</p>' +
        '<div class="tags">' + tags + '</div>' +
        '<div class="app-card__foot">' +
          '<a class="btn btn-primary" href="demos/' + app.slug + '.html">Open demo →</a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function capCard(c) {
    return '<div class="cap"><div class="ic">' + icon(c.icon) + '</div><h4>' + c.title + '</h4><p>' + c.desc + '</p></div>';
  }

  // ---- Render ----
  function fill(selector, items, render) {
    var el = document.querySelector(selector);
    if (el) el.innerHTML = items.map(render).join('');
  }
  ["ag", "elec", "fin"].forEach(function (s) {
    fill('[data-grid="' + s + '"]', window.FS_APPS.filter(function (a) { return a.sector === s; }), appCard);
  });
  fill('[data-grid="cap"]', window.FS_CAPABILITIES, capCard);

  // ---- Year ----
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

  // ---- Reveal on scroll ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---- Contact form → mailto (swap for Formspree later if desired) ----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), email = form.email.value.trim(),
          company = form.company.value.trim(), msg = form.message.value.trim();
      if (!name || !email || !msg) { form.reportValidity(); return; }
      var subject = encodeURIComponent("Project inquiry from " + name + (company ? " (" + company + ")" : ""));
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + (company ? "\nCompany / industry: " + company : "") +
        "\n\n" + msg + "\n\n— Sent from the Fresh Strategies showcase"
      );
      window.location.href = "mailto:nick@myfreshstrategies.com?subject=" + subject + "&body=" + body;
    });
  }
})();
