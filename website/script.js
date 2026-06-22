/* ==========================================================================
   RINALDS DĒRICS — site behaviour
   i18n (EN/LV) · scroll reveals · count-ups · timeline · tabs · cursor
   ========================================================================== */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     I18N
  ------------------------------------------------------------------ */
  var I18N = {
    en: {
      "skip": "Skip to content",
      "toTop": "Back to top",
      "nav.about": "About",
      "nav.ventures": "Ventures",
      "nav.experience": "Experience",
      "nav.discipline": "Discipline",
      "nav.academics": "Academics",
      "nav.contact": "Contact",

      "hero.loc": "Riga, Latvia",
      "hero.tagline": "I build systems that work — in technology, in business, and in training.",
      "hero.cv": "View CV",
      "hero.contact": "Get in touch",
      "hero.scroll": "Scroll",

      "about.kicker": "Who I am",
      "about.title": "About me",
      "about.lead": "The goal is simple: to build and run ventures of my own — backed by a real business education, not just instinct.",
      "about.p1": "I'm a computer systems technician from Riga, drawn to how systems and processes actually work — and how to make them work better.",
      "about.p2": "Outside formal study I taught myself the practical side of business: building online stores, running paid ad campaigns, and producing content that reached over 2.3 million views. I generated real sales, learned where things break, and came away with an honest read on what it takes to run a venture.",
      "about.p3": "I approach goals the way I approach training — consistently, over the long term. Four years in the gym, a marathon, and two half-marathons taught me that discipline compounds. I'm now building a serious foundation in business and entrepreneurship.",

      "vent.kicker": "Proof of work",
      "vent.title": "What I've built",
      "vent.stat1": "total content views",
      "vent.stat2": "paid ad campaigns",
      "vent.stat3": "ventures launched",
      "vent.tab1": "E-commerce venture",
      "vent.tab2": "This website",
      "vent.ecom.h": "Self-directed e-commerce, end to end",
      "vent.ecom.p1": "I founded and ran my own e-commerce operation: built the store, selected the products, and ran paid advertising on Meta and TikTok — roughly €900 across 6 campaigns. To support it, I grew a content channel to over 2.3 million total views, with a single video reaching 2 million.",
      "vent.ecom.p2": "The venture generated sales but not profitability. The bottleneck was ad-creative quality and conversion — and diagnosing that honestly is the most useful business lesson I've earned so far.",
      "vent.ecom.m1": "Store build & product selection",
      "vent.ecom.m2": "Meta & TikTok paid ads · ~€900 / 6 campaigns",
      "vent.ecom.m3": "2.3M+ views · one video at 2M",
      "vent.site.h": "Designed and hand-built from scratch",
      "vent.site.p1": "This site is written by hand — semantic HTML, custom CSS, and vanilla JavaScript. No templates, no frameworks, no page builders. It's deployed on Cloudflare Pages and serves as proof of the skills it claims.",
      "vent.site.m2": "Bilingual EN / LV",

      "exp.kicker": "Where I've worked",
      "exp.title": "Experience",
      "exp.1.role": "Administrator",
      "exp.1.date": "2024 — present",
      "exp.1.b1": "Front-desk service, membership payments and client onboarding; opened and closed the club independently.",
      "exp.1.b2": "Covered shifts across all 15 MyFitness clubs in Riga.",
      "exp.1.b3": "Two periods: Dec 2024 – Dec 2025, then returned to the role in March 2026 after seasonal work abroad.",
      "exp.2.role": "IT Repair Technician — praxis",
      "exp.2.b1": "Repaired and serviced office printers and equipment.",
      "exp.2.b2": "Installed and configured 160 kg A3 multifunction printers on-site at client locations.",
      "exp.2.b3": "Hands-on with computers, components and peripherals; installed operating systems and software.",
      "exp.3.role": "Stage Crew Member",
      "exp.3.date": "Nov 2025",
      "exp.3.b1": "Stage load-in and load-out for the OneRepublic and Zara Larsson productions at Xiaomi Arena, Riga.",
      "exp.3.b2": "Assembled stage structures, lighting and audio rigging alongside international touring staff.",
      "exp.4.role": "Charity-Bag Route Work",
      "exp.4.date": "Jan — Feb 2026",
      "exp.4.b1": "Distributed charity collection bags across Mansfield, Chesterfield and Sheffield.",
      "exp.4.b2": "Covered 20–30 km on foot daily, delivering 800–1,500 bags per day.",
      "exp.5.role": "Garden Labourer",
      "exp.5.date": "May — Oct 2023",
      "exp.5.b1": "Landscaping, tree removal and trench digging; planting and moving plants and soil.",
      "exp.5.b2": "Unloaded 4 tons of materials for a new greenhouse build.",

      "disc.kicker": "Training as evidence",
      "disc.title": "Discipline compounds",
      "disc.s1": "bench press",
      "disc.s2": "squat",
      "disc.s3": "deadlift",
      "disc.s4": "marathon",
      "disc.s5": "half-marathons",
      "disc.note": "Lifts at 83 kg bodyweight · 4 years of training",
      "disc.line": "The same consistency runs my work.",
      "disc.found.label": "Where it started — about 4–5 years in each, from childhood",
      "disc.found.judo.a": "Judo",
      "disc.found.judo.m": "\"LIDO\" Judo Club · 2012–2017",
      "disc.found.volley.a": "Volleyball",
      "disc.found.volley.m": "Rīgas Volejbola skola · 2016–2021",
      "disc.found.chess.a": "Chess",
      "disc.found.chess.m": "Rīgas Šaha skola · 2013–2017",
      "disc.found.choir.a": "Choir",
      "disc.found.choir.m": "Rīgas 64. vidusskola · 2013–2018",

      "acad.kicker": "On the record",
      "acad.title": "Academics",
      "acad.rtk.inst": "Rīgas Tehniskā koledža",
      "acad.rtk.cred": "Computer Systems Technician · EQF level 4",
      "acad.rtk.date": "2026",
      "acad.rtk.b1": "Grade average above 8/10 — repeated Silver merit certificates across the programme.",
      "acad.rtk.b2": "Recognised at the SkillsLatvija national competition, 2024.",
      "acad.school.inst": "Rīgas 64. vidusskola",
      "acad.school.cred": "General basic education",
      "acad.school.b1": "Certificate of general basic education, issued June 2022.",
      "acad.fit.inst": "Sporta izglītības aģentūra",
      "acad.fit.cred": "Fitness Trainer, Category C",
      "acad.fit.date": "In progress, 2026",
      "acad.fit.b1": "Certification in progress — expected 2026.",

      "contact.kicker": "Next move",
      "contact.title": "Get in touch",
      "contact.cv": "Download CV",
      "footer.credit": "Designed & built by Rinalds Dērics",

      "alt.hero": "Rinalds Dērics in a dark suit, portrait at a gala evening",
      "alt.about": "Rinalds Dērics, portrait by a lake at sunset",
      "alt.admin": "MyFitness Plavnieki club opening day",
      "alt.exp": "Warehouse pallet racking at the service centre",
      "alt.stage": "Stage crew work at Xiaomi Arena, Riga",
      "alt.charity": "On the route in hi-vis on a rainy UK street",
      "alt.contact": "Rinalds Dērics, portrait in a white outfit at a cherry-blossom park",
      "alt.disc1": "Rinalds Dērics, physique after four years of training, garden backdrop",
      "alt.disc2": "Rinalds with his Riga Marathon half-marathon finisher medal",
      "alt.certRtkSilver24": "RTK Silver merit certificate, 2023/2024 semester 2",
      "alt.certRtkSilver23": "RTK Silver merit certificate, 2022/2023",
      "alt.certRtkBronze24": "RTK Bronze merit certificate, 2023/2024 semester 1",
      "alt.certRtkSkills": "SkillsLatvija competition recognition, 2024",
      "alt.certSchool": "Certificate of general basic education, Rīgas 64. vidusskola, 2022",

      "title": "Rinalds Dērics"
    },

    lv: {
      "skip": "Pāriet uz saturu",
      "toTop": "Atpakaļ uz augšu",
      "nav.about": "Par mani",
      "nav.ventures": "Projekti",
      "nav.experience": "Pieredze",
      "nav.discipline": "Disciplīna",
      "nav.academics": "Izglītība",
      "nav.contact": "Kontakti",

      "hero.loc": "Rīga, Latvija",
      "hero.tagline": "Es veidoju sistēmas, kas strādā — tehnoloģijās, biznesā un treniņos.",
      "hero.cv": "Apskatīt CV",
      "hero.contact": "Sazinies ar mani",
      "hero.scroll": "Ritini",

      "about.kicker": "Kas es esmu",
      "about.title": "Par mani",
      "about.lead": "Mērķis ir vienkāršs: veidot un vadīt pašam savus uzņēmumus — ar reālu biznesa izglītību, ne tikai ar intuīciju.",
      "about.p1": "Esmu datorsistēmu tehniķis no Rīgas, un mani saista tas, kā sistēmas un procesi patiesībā darbojas — un kā panākt, lai tie darbotos labāk.",
      "about.p2": "Ārpus formālajām mācībām pats apguvu biznesa praktisko pusi: veidoju interneta veikalus, vadīju maksas reklāmas kampaņas un radīju saturu, kas sasniedza vairāk nekā 2,3 miljonus skatījumu. Guvu reālus pārdošanas darījumus, iemācījos, kur lietas saplīst, un ieguvu godīgu priekšstatu par to, ko prasa sava biznesa vadīšana.",
      "about.p3": "Mērķiem es pieeju tāpat kā treniņiem — konsekventi un ilgtermiņā. Četri gadi sporta zālē, maratons un divi pusmaratoni man iemācīja, ka disciplīna summējas. Tagad veidoju nopietnu pamatu biznesā un uzņēmējdarbībā.",

      "vent.kicker": "Padarītā pierādījums",
      "vent.title": "Ko esmu uzbūvējis",
      "vent.stat1": "satura skatījumi kopā",
      "vent.stat2": "maksas reklāmas kampaņas",
      "vent.stat3": "pašu radīti projekti",
      "vent.tab1": "E-komercijas projekts",
      "vent.tab2": "Šī mājaslapa",
      "vent.ecom.h": "Pašvadīta e-komercija no sākuma līdz beigām",
      "vent.ecom.p1": "Dibināju un pats vadīju savu e-komercijas projektu: izveidoju veikalu, izvēlējos produktus un vadīju maksas reklāmu Meta un TikTok platformās — aptuveni 900 € sešās kampaņās. Projekta atbalstam izaudzēju satura kanālu līdz vairāk nekā 2,3 miljoniem skatījumu, un viens video sasniedza 2 miljonus.",
      "vent.ecom.p2": "Projekts radīja pārdošanas darījumus, bet ne peļņu. Šaurā vieta bija reklāmas materiālu kvalitāte un konversija — un šī godīgā diagnoze ir mana līdz šim vērtīgākā biznesa mācība.",
      "vent.ecom.m1": "Veikala izveide un produktu izvēle",
      "vent.ecom.m2": "Meta un TikTok reklāmas · ~900 € / 6 kampaņas",
      "vent.ecom.m3": "2,3 milj.+ skatījumu · viens video ar 2 milj.",
      "vent.site.h": "Izstrādāta un uzbūvēta no nulles",
      "vent.site.p1": "Šī lapa ir rakstīta ar rokām — semantisks HTML, pielāgots CSS un tīrs JavaScript. Bez veidnēm, bez ietvariem, bez lapu konstruktoriem. Tā ir izvietota Cloudflare Pages un kalpo kā pierādījums prasmēm, par kurām tā stāsta.",
      "vent.site.m2": "Divvalodu EN / LV",

      "exp.kicker": "Kur esmu strādājis",
      "exp.title": "Pieredze",
      "exp.1.role": "Administrators",
      "exp.1.date": "2024 — šobrīd",
      "exp.1.b1": "Klientu apkalpošana pie reģistratūras, maksājumi un jauno biedru uzņemšana; patstāvīgi atvēru un slēdzu klubu.",
      "exp.1.b2": "Aizvietoju maiņas visos 15 MyFitness klubos Rīgā.",
      "exp.1.b3": "Divi periodi: 2024. gada decembris – 2025. gada decembris, pēc tam atgriezos šajā lomā 2026. gada martā pēc sezonas darba ārzemēs.",
      "exp.2.role": "IT remonta tehniķis — prakse",
      "exp.2.b1": "Remontēju un apkopu biroja printerus un tehniku.",
      "exp.2.b2": "Uzstādīju un konfigurēju 160 kg A3 daudzfunkciju printerus pie klientiem uz vietas.",
      "exp.2.b3": "Praktisks darbs ar datoriem, komponentēm un perifēriju; instalēju operētājsistēmas un programmatūru.",
      "exp.3.role": "Skatuves tehniskais darbinieks",
      "exp.3.date": "Nov. 2025",
      "exp.3.b1": "OneRepublic un Zara Larsson koncertu skatuves montāža un demontāža Xiaomi arēnā Rīgā.",
      "exp.3.b2": "Kopā ar starptautisko turneju personālu montēju skatuves konstrukcijas, gaismas un skaņas aprīkojumu.",
      "exp.4.role": "Labdarības maisu izvadāšana",
      "exp.4.date": "Janv. — Febr. 2026",
      "exp.4.b1": "Izplatīju labdarības savākšanas maisus Mansfīldā, Česterfīldā un Šefīldā, Lielbritānijā.",
      "exp.4.b2": "Katru dienu kājām veicu 20–30 km, piegādājot 800–1500 maisus dienā.",
      "exp.5.role": "Dārza strādnieks",
      "exp.5.date": "Maijs — Okt. 2023",
      "exp.5.b1": "Labiekārtošana, koku novākšana un tranšeju rakšana; augu stādīšana un pārvietošana, darbs ar augsni.",
      "exp.5.b2": "Izkrāvu 4 tonnas materiālu jaunas siltumnīcas būvniecībai.",

      "disc.kicker": "Treniņi kā pierādījums",
      "disc.title": "Disciplīna summējas",
      "disc.s1": "spiešana guļus",
      "disc.s2": "pietupiens",
      "disc.s3": "vilkme",
      "disc.s4": "maratons",
      "disc.s5": "pusmaratoni",
      "disc.note": "Cēlieni pie 83 kg ķermeņa svara · 4 gadi treniņu",
      "disc.line": "Tā pati konsekvence virza arī manu darbu.",
      "disc.found.label": "Kur viss sākās — apmēram 4–5 gadi katrā, jau no bērnības",
      "disc.found.judo.a": "Džudo",
      "disc.found.judo.m": "\"LIDO\" džudo klubs · 2012–2017",
      "disc.found.volley.a": "Volejbols",
      "disc.found.volley.m": "Rīgas Volejbola skola · 2016–2021",
      "disc.found.chess.a": "Šahs",
      "disc.found.chess.m": "Rīgas Šaha skola · 2013–2017",
      "disc.found.choir.a": "Koris",
      "disc.found.choir.m": "Rīgas 64. vidusskola · 2013–2018",

      "acad.kicker": "Oficiāli apstiprināts",
      "acad.title": "Akadēmiskie sasniegumi",
      "acad.rtk.inst": "Rīgas Tehniskā koledža",
      "acad.rtk.cred": "Datorsistēmu tehniķis · vidējā profesionālā izglītība",
      "acad.rtk.date": "2026",
      "acad.rtk.b1": "Vidējā atzīme virs 8/10 — vairākkārtēji Sudraba sertifikāti par sasniegumiem mācībās.",
      "acad.rtk.b2": "Atzinība SkillsLatvija nacionālajā konkursā, 2024.",
      "acad.school.inst": "Rīgas 64. vidusskola",
      "acad.school.cred": "Vispārējā pamatizglītība",
      "acad.school.b1": "Apliecība par vispārējo pamatizglītību, izsniegta 2022. gada jūnijā.",
      "acad.fit.inst": "Sporta izglītības aģentūra",
      "acad.fit.cred": "C kategorijas fitnesa treneris",
      "acad.fit.date": "Procesā, 2026",
      "acad.fit.b1": "Sertifikācija procesā — plānota 2026. gadā.",

      "contact.kicker": "Nākamais solis",
      "contact.title": "Sazinies ar mani",
      "contact.cv": "Lejupielādēt CV",
      "footer.credit": "Dizains un izstrāde — Rinalds Dērics",

      "alt.hero": "Rinalds Dērics tumšā uzvalkā, portrets gada balles vakarā",
      "alt.about": "Rinalds Dērics, portrets pie ezera saulrietā",
      "alt.admin": "MyFitness Pļavnieku kluba atklāšanas diena",
      "alt.exp": "Noliktavas paliktņu plaukti servisa centrā",
      "alt.stage": "Skatuves tehniskais darbs Xiaomi arēnā, Rīgā",
      "alt.charity": "Maršrutā atstarojošā vestē lietainā Lielbritānijas ielā",
      "alt.contact": "Rinalds Dērics, portrets baltā tērpā ķiršu ziedu parkā",
      "alt.disc1": "Rinalds Dērics, ķermeņa forma pēc četriem treniņu gadiem, dārza fonā",
      "alt.disc2": "Rinalds ar Rīgas maratona pusmaratona finišētāja medaļu",
      "alt.certRtkSilver24": "RTK Sudraba sertifikāts, 2023./2024. 2. semestris",
      "alt.certRtkSilver23": "RTK Sudraba sertifikāts, 2022./2023.",
      "alt.certRtkBronze24": "RTK Bronzas sertifikāts, 2023./2024. 1. semestris",
      "alt.certRtkSkills": "SkillsLatvija konkursa atzinība, 2024.",
      "alt.certSchool": "Apliecība par vispārējo pamatizglītību, Rīgas 64. vidusskola, 2022.",

      "title": "Rinalds Dērics"
    }
  };

  var LANG_KEY = "rd-lang";
  var currentLang = "en";

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    var dict = I18N[lang];

    document.documentElement.lang = lang;
    document.title = dict["title"];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    // Re-render any stat numbers already in their final state (locale decimals)
    document.querySelectorAll("[data-count]").forEach(function (el) {
      if (el.dataset.done === "1") renderCount(el, parseFloat(el.getAttribute("data-count")));
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  /* ------------------------------------------------------------------
     COUNT-UP STATS
  ------------------------------------------------------------------ */
  function renderCount(el, value) {
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var text = value.toFixed(decimals);
    if (currentLang === "lv") text = text.replace(".", ",");
    el.textContent = text + suffix;
  }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (reducedMotion) {
      el.dataset.done = "1";
      renderCount(el, target);
      return;
    }
    var duration = 1700;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 4); // ease-out quart
      renderCount(el, target * eased);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        el.dataset.done = "1";
        renderCount(el, target);
      }
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------
     SCROLL REVEALS + COUNT TRIGGER
  ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll("[data-count]").forEach(function (el) {
          if (!el.dataset.started) {
            el.dataset.started = "1";
            animateCount(el);
          }
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el, i) {
      // small stagger inside grids
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.dataset.done = "1";
      renderCount(el, parseFloat(el.getAttribute("data-count")));
    });
  }

  /* ------------------------------------------------------------------
     NAV — scrolled state + scrollspy
  ------------------------------------------------------------------ */
  var nav = document.querySelector(".nav");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var spyTargets = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && spyTargets.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          var active = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("is-active", active);
          if (active) { a.setAttribute("aria-current", "true"); }
          else { a.removeAttribute("aria-current"); }
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    spyTargets.forEach(function (s) { spy.observe(s); });
  }

  /* ------------------------------------------------------------------
     TIMELINE ACCORDION
  ------------------------------------------------------------------ */
  document.querySelectorAll(".tl-head").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".tl-item, .acad-entry");
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      if (item) item.classList.toggle("is-open", !open);
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  });

  // keep open panels sized correctly on resize / language change
  function refreshPanels() {
    document.querySelectorAll(".tl-item.is-open .tl-panel, .acad-entry.is-open .tl-panel").forEach(function (panel) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  }
  window.addEventListener("resize", refreshPanels);
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      requestAnimationFrame(refreshPanels);
    });
  });

  /* ------------------------------------------------------------------
     VENTURE TABS
  ------------------------------------------------------------------ */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) {
        e.preventDefault();
        selectTab(next);
        next.focus();
      }
    });
  });

  /* ------------------------------------------------------------------
     CUSTOM CURSOR + MAGNETIC BUTTONS (pointer:fine, motion allowed)
  ------------------------------------------------------------------ */
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (finePointer && !reducedMotion) {
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("has-cursor");

    var mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener("mousemove", function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    });

    (function followLoop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(followLoop);
    })();

    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { ring.classList.remove("is-hover"); });
    });

    // magnetic pull on primary buttons
    document.querySelectorAll(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = "translate(" + dx * 0.12 + "px," + dy * 0.18 + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ------------------------------------------------------------------
     INIT
  ------------------------------------------------------------------ */
  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* private mode */ }
  applyLang(saved || "en");

  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
