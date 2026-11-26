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

  site: {
    name: "Kleos",
    artCredit: {
      de: "Illustrationen: Fabienne Andrees",
      en: "Illustrations: Fabienne Andrees"
    }
  },

  /* ---------- Top of the page ---------- */
  hero: {
    kind: {
      de: "Pen-&-Paper-Rollenspiel",
      en: "Pen & paper role-playing game"
    },
    gloss: {
      de: "κλέος, griechisch: was über dich erzählt wird.",
      en: "κλέος, Greek: what is told of you."
    },
    note: {
      text: {
        de: "Vgl. Seite 26, Nagy, G. (2020). The Ancient Greek Hero in 24 Hours. USA: Harvard University Press.",
        en: "See page 26, Nagy, G. (2020). The Ancient Greek Hero in 24 Hours. USA: Harvard University Press."
      },
      url: "https://www.google.de/books/edition/The_Ancient_Greek_Hero_in_24_Hours/Y8K_DwAAQBAJ?hl=de&gbpv=0"
    },

    /* Big artwork in the hero. Delete this block to hide it.
       layout: "stacked" below the text, or "side" beside it on desktop
       image:  shown on the page (about 800 pixels wide)
       large:  opened when visitors click the artwork (about 1600 pixels wide) */
    art: {
      layout: "side",
      image: "images/kleos-hero-800.webp",
      large: "images/kleos-hero-1600.webp",
      alt: {
        de: "Farbenfrohe Illustration: Fantastische Figuren sitzen unter einem Banner mit der Aufschrift „Kleos“ auf einem Holzfloß, umgeben von Sprech- und Gedankenblasen. Unter einem Band mit den Worten „Geteilte Fantasie“ entfaltet sich eine bunte, traumhafte Welt.",
        en: "Colourful illustration: fantastical characters sit on a wooden raft beneath a banner reading “Kleos”, surrounded by speech and thought bubbles. Below a ribbon reading “Geteilte Fantasie” (shared imagination), a vivid, dreamlike world unfolds."
      }
    }
  },

  /* ---------- Premise ---------- */
  premise: {
    heading: { de: "Was ist Kleos?", en: "What is Kleos?" },

    /* Shown directly beneath the first paragraph. */
    subtitle: {
      de: "Setzt euch zusammen, schlüpft in eine Rolle und erzählt gemeinsam eine Geschichte.",
      en: "Gather your friends, take on a role, and tell a shared story."
    },

    /* One entry per paragraph. The first one is shown larger. */
text: {
      de: [
        "Kleos ist ein offenes Pen-&-Paper-Rollenspiel.",
        "Wir legen großen Wert auf einen schönen Erzählfluss. Die Spielregeln sind leicht zu lernen und können für alle möglichen Geschichten verwendet werden: Heldentaten im alten Griechenland, Detektivarbeit in den 1920ern, klassische Fantasy, Sci-Fi oder was euch sonst so in den Sinn kommt - unser System ermöglicht taktische Kämpfe, lebhaftes Rollenspiel und facettenreiche Charaktere."
      ],
      en: [
        "Kleos is an open pen-&-paper role-playing game.",
        "We place great value on narrative flow. The rules are easy to learn and can be used for all kinds of stories: heroic deeds in ancient Greece, detective work in the 1920s, classic fantasy, sci-fi, or whatever else comes to mind - our system enables tactical combat, engaging role-play, and rich characters."
      ]
    },

    /* Quick facts. Use <em>text</em> in a value to italicize it.
       Delete this whole block if you don't want it. */
    facts: [
      { label: { de: "Spielerzahl", en: "Player-Count" }, 
        value: { de: "1 Spielleiter <em>(Erzähler)</em>,\n1-6 Spieler <em>(Protagonisten)</em>", en: "1 game master <em>(narrator)</em>,\n1-6 players <em>(protagonists)</em>" } },
      { label: { de: "Dauer einer Sitzung", en: "Session length" },
        value: { de: "2h - 8h <em>(je nach Präferenz)</em>", en: "2h - 8h <em>(depending on preference)</em>" } },
      { label: { de: "Das braucht ihr", en: "What you need" },
        value: { de: "Regelwerk, Stift & Papier, ein Abenteuer und Rollenspielwürfel", en: "Rulebook, pen & paper, an adventure and role-playing dice" } },
      { label: { de: "Stand", en: "Status" },
        value: { de: "Kleos ist vollständig spielbar <em>(wir machen es nur noch schick)</em>", en: "Kleos is fully playable <em>(we are just polishing it)</em>" } }
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
     Set items: [] (empty) to hide the whole section. */
  work: {
    heading: { de: "Daran arbeiten wir gerade", en: "What we are working on" },
    /* Update this date whenever you change the projects below. Use YYYY-MM-DD. */
    updated: "2026-11-26",
    items: [
      { title: { de: "Neue Regelversion", en: "New rules version" },
        description: {
          de: "Ein frisch aufgeräumtes Regelwerk, bereit für unseren ersten großen Release.",
          en: "A freshly streamlined rulebook, ready for our first major release." },
        bullets: {
          de: ["Detaillierte Beispiele", "Fluffigeres Skill-System", "Vereinfachte Behauptungsstruktur", "Persönliche Projekte", "Print-Layout"],
          en: ["Detailed examples", "Smoother skill system", "Simplified claim structure", "Personal projects", "Print layout"] },
        status: { de: "🛠️ In Arbeit", en: "🛠️ In progress" },
        tone: "hot" },

      { title: { de: "Einstiegsabenteuer - Die Zauberlehrlinge", en: "Starter adventure - The Apprentices" },
        description: {
          de: "Ein witziges Abenteuer für Neulinge und erfahrene Rollenspieler. Inhaltlich ist es bereits fertig, es fehlen nur noch ein paar Illustrationen und das Layout.",
          en: "A fun adventure for newcomers and experienced role-players. The content is already done; only a few illustrations and the layout remain." },
        bullets: {
          de:["Feinschliff", "Illustration", "Print-Layout"], 
          en:["Final touches", "Illustration", "Print layout"]
        },
        status: { de: "📝 Grafik & Layout", en: "📝 Art & layout" },
        tone: "go" },
      { title: { de: "Weitere Abenteuer", en: "Further adventures" },
        description: {
          de: "Wir haben bereits weitere Abenteuer in Arbeit. Einige sind praktisch fertig, während andere gerade ihre ersten Playtests durchlaufen haben.",
          en: "We are always working on new adventures. Some of them are basically done, while others have just gone through their first playtests." },
        bullets: {
            de:["Die Kupfersammler - Spieler gegen Spieler, in einer exotischen Wüstenstadt (vollständig Spielbar)", "Killing Vlad - Ein kurzweiliges Hack'n'slay im 30-jährigen Krieg (wird getestet)", "Metanoion - Eine epische Kampagne im alten Griechenland (in Entwicklung)"],
            en:["The Copperclans - Player versus player in an exotic desert town (fully playable)", "Killing Vlad - A fast-paced hack'n'slay set in the 30-years war (playtesting)", "Metanoion - An epic campaign set in ancient greece (in development)"]
        },
        status: { de: "🛠️ In Arbeit", en: "🛠️ In progress" },
        tone: "idea" }
    ]
  },

  /* ---------- Artwork ----------
     1. Put the image file into the folder "images".
     2. Write its path into  image:  (for example "images/cover.jpg").
     The artwork section and navigation link are hidden until an image is added.
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
       Use <em>text</em> in a description to italicize it.
     Entries are shown in this order. */
  categories: {
    rules:   { de: "Regeln",  en: "Rules" },
    content: { de: "Inhalte", en: "Content" }
  },

  downloads: [
    { category: "rules",
      title: { de: "Regelwerk (2024)", en: "Rulebook (2024)" },
      description: { de: "Unser erstes öffentliches Regelwerk - vollständig spielbar. Inzwischen hat sich bei uns zwar einiges getan, aber diese Version spielt sich immer noch super.", en: "Our first public rulebook - fully playable. A lot has changed since then, but this version is still great fun to play." },
      file: "downloads/kleos-regelwerk-2024.pdf",
      version: "1.0", updated: "2026-11-26", size: "" },

    { category: "rules",
      title: { de: "Charakterbogen (2024)", en: "Character sheet (2024)" },
      description: { de: "Der Charakterbogen für das dazugehörige Regelwerk zum Ausdrucken. Du kannst ihn gern nach Bedarf ergänzen oder abwandeln.", en: "The printable character sheet for the accompanying rulebook. Feel free to expand on it or to adapt it as needed." },
      file: "downloads/kleos-charakterbogen-2024.pdf",
      version: "1.0", updated: "2026-11-26", size: "" },

    { category: "content",
      title: { de: "Abenteuer - Die Zauberlehrlinge (2024)", en: "Aventure - The Apprentices (2024)" },
      description: { de: "<em>Es ist euer erster Tag als Lehrlinge der Magie. Meister Merlin muss \"Nur mal kurz etwas besorgen\" und lässt euch in seinem Haus voller magischer Artefakte und surrealer Absonderlichkeiten allein. Wer da jetzt Böses denkt...</em>\n\nEuch erwartet ein verspieltes Abenteuer mit Fokus auf Erzählung, Improvisation und viel Kreativität.", en: "<em>It's your first day as apprentices of magic. Master Merlin has to \"Go get something real quick\" and leaves you alone in his house full of magical artifacts and surreal oddities. Surely, you won't be tempted by mischief...</em>\n\nA playful adventure, focused on storytelling, improvisation and plenty of creativity." },
      file: "downloads/zauberlehrlinge-2024.pdf",
      version: "1.0", updated: "2026-11-26", size: "" }
  ],

  /* ---------- Social media ----------
     Replace the web addresses with your own channels. An entry with an
     empty url "" is not shown. The addresses below are placeholders. */
  social: [
    { name: "Discord",   url: "https://discord.com" },
    { name: "Instagram", url: "https://www.instagram.com" }
  ]
};