/* Builds the page from content.js. You do not need to edit this file. */
(function () {
  "use strict";

  var C = window.KLEOS;
  if (!C) { return; }

  var UI = {
    de: {
      skip: "Zum Inhalt springen",
      nav_premise: "Prämisse", nav_art: "Artwork", nav_dl: "Downloads", nav_community: "Community",
      cta_rules: "Regeln herunterladen", cta_premise: "Worum geht es?",
      h_art: "Artwork", h_dl: "Downloads", h_community: "Community",
      dl_lead: "Regeln und Zusatzinhalte zum Herunterladen.",
      community_lead: "Hier findet ihr uns.",
      btn_dl: "PDF herunterladen", soon: "Folgt",
      updated: "Stand", version: "Version", art_by: "Illustration:",
      enlarge: "Vergrößern", close: "Schließen", new_tab: "öffnet in neuem Tab",
      imprint: "Impressum", privacy: "Datenschutz", noscript: "Diese Seite braucht JavaScript, um Inhalte anzuzeigen."
    },
    en: {
      skip: "Skip to content",
      nav_premise: "Premise", nav_art: "Artwork", nav_dl: "Downloads", nav_community: "Community",
      cta_rules: "Download the rules", cta_premise: "What is it about?",
      h_art: "Artwork", h_dl: "Downloads", h_community: "Community",
      dl_lead: "Rules and extra content to download.",
      community_lead: "Find us here.",
      btn_dl: "Download PDF", soon: "Coming soon",
      updated: "Updated", version: "Version", art_by: "Art:",
      enlarge: "Enlarge", close: "Close", new_tab: "opens in a new tab",
      imprint: "Legal notice", privacy: "Privacy policy", noscript: "This page needs JavaScript to show its content."
    }
  };

  var langs = (C.languages && C.languages.length) ? C.languages : ["en"];
  var lang = pickLanguage();

  function pickLanguage() {
    var n = String(navigator.language || "").slice(0, 2).toLowerCase();
    if (langs.indexOf(n) > -1) { return n; }
    return langs.indexOf(C.defaultLanguage) > -1 ? C.defaultLanguage : langs[0];
  }

  function t(v) {
    if (v == null) { return ""; }
    if (typeof v === "string" || Array.isArray(v)) { return v; }
    if (v[lang] != null) { return v[lang]; }
    if (v.en != null) { return v.en; }
    return v[langs[0]] != null ? v[langs[0]] : "";
  }

  function ui(key) {
    var d = UI[lang] || UI.en;
    return d[key] != null ? d[key] : (UI.en[key] || "");
  }

  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text != null) { e.textContent = text; }
    return e;
  }

  function markPlaceholder(node, text) {
    if (typeof text === "string" && text.charAt(0) === "[") { node.classList.add("ph-text"); }
  }

  function fmtDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) { return s; }
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    try {
      return d.toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return s; }
  }

  /* On a real web host, add ?v=... so visitors never get an old cached PDF. */
  function fileHref(d) {
    var h = d.file;
    if (/^https?:$/.test(location.protocol) && h.indexOf("?") < 0 && (d.updated || d.version)) {
      h += "?v=" + encodeURIComponent((d.updated || "") + (d.version ? "-" + d.version : ""));
    }
    return h;
  }

  var ARROW_DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-5-5m5 5 5-5M5 20h14"/></svg>';

  /* ---------- Lightbox ---------- */
  var box = $("lightbox");
  function openBox(item, label) {
    if (!box || typeof box.showModal !== "function") { window.open(item.image, "_blank"); return; }
    var img = box.querySelector("img");
    img.src = item.image;
    img.alt = t(item.alt) || t(item.caption);
    box.querySelector("p").textContent = label;
    box.showModal();
  }
  if (box) {
    box.querySelector(".close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box) { box.close(); } });
  }

  /* ---------- Render ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.title = ((C.site && C.site.name) || "Kleos") + " – " + t(C.hero.kind);

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (n) {
      n.textContent = ui(n.getAttribute("data-i18n"));
    });

    $("hero-kind").textContent = t(C.hero.kind);
    $("hero-gloss").textContent = t(C.hero.gloss);

    /* language switch */
    var sw = $("lang");
    sw.textContent = "";
    sw.hidden = langs.length < 2;
    if (langs.length > 1) {
      langs.forEach(function (l) {
        var b = el("button", null, l.toUpperCase());
        b.type = "button";
        b.setAttribute("lang", l);
        b.setAttribute("aria-pressed", String(l === lang));
        b.addEventListener("click", function () { lang = l; render(); });
        sw.appendChild(b);
      });
    }

    /* premise */
    $("premise-h").textContent = t(C.premise.heading);
    var pt = $("premise-text");
    pt.textContent = "";
    [].concat(t(C.premise.text)).forEach(function (p, i) {
      var e = el("p", i === 0 ? "lede" : null, p);
      markPlaceholder(e, p);
      pt.appendChild(e);
    });
    var facts = $("facts");
    facts.textContent = "";
    var fl = C.premise.facts || [];
    facts.hidden = !fl.length;
    fl.forEach(function (f) {
      var wrap = el("div");
      var v = t(f.value);
      var dd = el("dd", null, v);
      markPlaceholder(dd, v);
      wrap.appendChild(el("dt", null, t(f.label)));
      wrap.appendChild(dd);
      facts.appendChild(wrap);
    });

    /* gallery */
    var g = $("gallery");
    g.textContent = "";
    (C.gallery || []).forEach(function (it) {
      var cap = t(it.caption);
      var credit = it.credit ? ui("art_by") + " " + it.credit : "";
      var label = [cap, credit].filter(Boolean).join(" · ");
      var tile;
      if (it.image) {
        tile = el("button", "tile");
        tile.type = "button";
        var img = el("img");
        img.src = it.image;
        img.alt = t(it.alt) || cap;
        img.loading = "lazy";
        img.decoding = "async";
        tile.appendChild(img);
        tile.setAttribute("aria-label", ui("enlarge") + ": " + (t(it.alt) || cap));
        tile.addEventListener("click", function () { openBox(it, label); });
      } else {
        tile = el("div", "tile ph");
      }
      if (label) { tile.appendChild(el("span", "cap", label)); }
      g.appendChild(tile);
    });

    /* downloads */
    var list = $("dl-list");
    list.textContent = "";
    var cats = C.categories || {};
    var order = Object.keys(cats);
    var items = C.downloads || [];
    items.forEach(function (d) { if (order.indexOf(d.category) < 0) { order.push(d.category); } });
    order.forEach(function (key) {
      var inCat = items.filter(function (d) { return d.category === key; });
      if (!inCat.length) { return; }
      var grp = el("div", "dl-group");
      if (cats[key]) { grp.appendChild(el("h3", null, t(cats[key]))); }
      inCat.forEach(function (d) {
        var row = el("div", "dl");
        var info = el("div");
        info.appendChild(el("h4", null, t(d.title)));
        if (d.description) {
          var desc = t(d.description);
          var p = el("p", null, desc);
          markPlaceholder(p, desc);
          info.appendChild(p);
        }
        var bits = ["PDF"];
        if (d.size) { bits.push(d.size); }
        if (d.version) { bits.push(ui("version") + " " + d.version); }
        if (d.updated) { bits.push(ui("updated") + " " + fmtDate(d.updated)); }
        info.appendChild(el("p", "meta", bits.join(" · ")));
        row.appendChild(info);

        var a;
        if (d.file) {
          a = el("a", "btn primary");
          a.href = fileHref(d);
          a.setAttribute("download", "");
          a.innerHTML = ARROW_DOWN;
          a.appendChild(el("span", null, ui("btn_dl")));
          a.setAttribute("aria-label", ui("btn_dl") + ": " + t(d.title));
        } else {
          a = el("span", "btn off", ui("soon"));
        }
        row.appendChild(a);
        grp.appendChild(row);
      });
      list.appendChild(grp);
    });

    /* social */
    var s = $("social");
    s.textContent = "";
    (C.social || []).forEach(function (x) {
      if (!x.url) { return; }
      var li = el("li");
      var a = el("a", "soc");
      a.href = x.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", x.name + " (" + ui("new_tab") + ")");
      a.appendChild(el("span", null, x.name));
      var go = el("span", null, "↗");
      go.setAttribute("aria-hidden", "true");
      a.appendChild(go);
      li.appendChild(a);
      s.appendChild(li);
    });
    $("community").hidden = !s.children.length;

    /* footer */
    $("foot-name").textContent = "© " + new Date().getFullYear() + " " + ((C.site && C.site.name) || "Kleos");
  }

  render();
})();
