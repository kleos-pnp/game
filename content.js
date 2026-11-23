/* ============================================================
   KLEOS WEBSITE: ALL EDITABLE CONTENT LIVES IN THIS FILE

   You only need to edit this file and the folders "downloads"
   and "images". Everything else can stay as it is.

   Rules for editing:
   - Keep the quotation marks "like this" around every text.
   - Keep the commas at the end of each line and each { ... } block.
   - Text in [square brackets] is a placeholder. Replace it.
   - Texts shown as { de: "...", en: "..." } exist in German and English.
     If you want only one language, delete the other language here and
     set  languages: ["de"]  below.
   ============================================================ */

window.KLEOS = {

  /* ---------- Languages ---------- */
  languages: ["de", "en"],
  defaultLanguage: "de",

  site: { name: "Kleos" },

  /* ---------- Top of the page ---------- */
  hero: {
    kind: {
      de: "Pen-&-Paper-Rollenspiel",
      en: "Pen & paper role-playing game"
    },
    /* The meaning of the word "kleos". Change or remove as you like. */
    gloss: {
      de: "κλέος, griechisch: das, was man von dir erzählt. Der Ruhm, der den überlebt, der ihn verdient hat.",
      en: "κλέος, Greek: what is told of you. The glory that outlives the one who earned it."
    }
  },

  /* ---------- Premise ---------- */
  premise: {
    heading: { de: "Was ist Kleos?", en: "What is Kleos?" },

    /* One entry per paragraph. The first one is shown larger. */
    text: {
      de: [
        "Kleos ist ein Pen-&-Paper-Rollenspiel: Ihr trefft euch am Tisch, übernehmt Rollen und erzählt gemeinsam eine Geschichte, deren Ausgang vorher niemand kennt.",
        "[Platzhalter] Hier steht die Prämisse von Kleos in zwei bis drei Sätzen: die Welt, der Ton und das, was die Spielenden tun."
      ],
      en: [
        "Kleos is a pen & paper role-playing game: you meet at the table, take on roles and tell a story together whose ending nobody knows in advance.",
        "[Placeholder] This is where the premise of Kleos goes, in two or three sentences: the world, the tone and what the players do."
      ]
    },

    /* Quick facts. Delete this whole block if you don't want it. */
    facts: [
      { label: { de: "Spielende", en: "Players" },
        value: { de: "[Platzhalter]", en: "[Placeholder]" } },
      { label: { de: "Dauer einer Sitzung", en: "Session length" },
        value: { de: "[Platzhalter]", en: "[Placeholder]" } },
      { label: { de: "Das braucht ihr", en: "What you need" },
        value: { de: "[Platzhalter]", en: "[Placeholder]" } },
      { label: { de: "Stand", en: "Status" },
        value: { de: "[Platzhalter]", en: "[Placeholder]" } }
    ]
  },

  /* ---------- Daran arbeiten wir gerade ----------
     One { ... } block per project. Copy a block to add one, delete a block to remove it.
       title:        name of the project
       description:  one or two sentences (optional)
       bullets:      short list of points (optional, delete the line if you don't want it)
       status:       ANY text, emojis welcome, e.g. "🛠️ Wir hämmern drauf rum"
       tone:         colour of the status label. Choose one of:
                     "hot"  (orange: in full swing)
                     "go"   (green: nearly done / released)
                     "idea" (blue: still an idea or in testing)
                     "rest" (grey: paused)
                     Leave it out for a neutral label.
     Set  work: []  (empty) to hide the whole section. */
  work: {
    heading: { de: "Daran arbeiten wir gerade", en: "What we are working on" },
    lead: {
      de: "Ein Blick in die Werkstatt: Das ist gerade in Arbeit.",
      en: "A look into the workshop: this is what is in progress."
    },
    items: [
      { title: { de: "Neue Regelversion", en: "New rules version" },
        description: {
          de: "[Platzhalter] Kurze Beschreibung: Was ändert sich und warum?",
          en: "[Placeholder] Short description: what changes and why?" },
        bullets: {
          de: ["[Platzhalter] Erster Punkt", "[Platzhalter] Zweiter Punkt"],
          en: ["[Placeholder] First point", "[Placeholder] Second point"] },
        status: { de: "🛠️ In Arbeit", en: "🛠️ In progress" },
        tone: "hot" },

      { title: { de: "Einstiegsabenteuer", en: "Starter adventure" },
        description: {
          de: "[Platzhalter] Ein erstes Abenteuer für neue Spielgruppen.",
          en: "[Placeholder] A first adventure for new groups." },
        status: { de: "🎲 Im Playtest", en: "🎲 Playtesting" },
        tone: "idea" }
    ]
  },

  /* ---------- Artwork ----------
     1. Put the image file into the folder "images".
     2. Write its path into  image:  (for example "images/cover.jpg").
     Entries with an empty  image  show a grey placeholder tile.
     Good image size: about 1600 to 2000 pixels wide, under 500 KB, JPG or WebP.
     Tip: the first entry is shown biggest. */
  gallery: [
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } },
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } },
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } },
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } },
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } },
    { image: "", alt: { de: "", en: "" }, credit: "",
      caption: { de: "Titel des Artworks", en: "Artwork title" } }
  ],

  /* ---------- Downloads ----------
     To add a PDF: put the file into the folder "downloads", then copy one
     { ... } block below, paste it, and change the values.

       category:  "rules" or "content" (see the list "categories" below)
       file:      path to the PDF, e.g. "downloads/kleos-rulebook.pdf"
       version:   free text, e.g. "0.2" (optional)
       updated:   date as YEAR-MONTH-DAY, e.g. "2026-12-01". Change it whenever
                  you replace the file, so visitors see the file is new.
       size:      e.g. "2.4 MB" (optional)
     Entries are shown in this order. */
  categories: {
    rules:   { de: "Regeln",  en: "Rules" },
    content: { de: "Inhalte", en: "Content" }
  },

  downloads: [
    { category: "rules",
      title: { de: "Regelwerk", en: "Rulebook" },
      description: { de: "[Platzhalter] Kurzbeschreibung des Regelwerks.", en: "[Placeholder] Short description of the rulebook." },
      file: "downloads/kleos-regelwerk.pdf",
      version: "0.1", updated: "2026-11-22", size: "" },

    { category: "rules",
      title: { de: "Charakterbogen", en: "Character sheet" },
      description: { de: "[Platzhalter] Zum Ausdrucken.", en: "[Placeholder] For printing." },
      file: "downloads/kleos-charakterbogen.pdf",
      version: "0.1", updated: "2026-11-22", size: "" },

    { category: "content",
      title: { de: "Einstiegsabenteuer", en: "Starter adventure" },
      description: { de: "[Platzhalter] Ein erstes Abenteuer für die Spielleitung.", en: "[Placeholder] A first adventure for the game master." },
      file: "downloads/kleos-einstiegsabenteuer.pdf",
      version: "0.1", updated: "2026-11-22", size: "" }
  ],

  /* ---------- Social media ----------
     Replace the web addresses with your own channels. An entry with an
     empty url "" is not shown. The addresses below are placeholders. */
  social: [
    { name: "Discord",   url: "https://discord.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
    { name: "YouTube",   url: "https://www.youtube.com" },
    { name: "Bluesky",   url: "https://bsky.app" }
  ]
};
