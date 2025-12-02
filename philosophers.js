// philosophers.js

export const schools = [
  {
    id: "confucian",
    name: "Confucian/Rujia",
    chineseName: "...",
    color: "#ff0000", // "vermillion",
  },
  {
    id: "mohist",
    name: "Mohist",
    chineseName: "...",
    color: "gray",
  },
  {
    id: "yangist",
    name: "Yangist",
    chineseName: "...",
    color: "green",
  },
  {
    id: "daoist",
    name: "Daoist",
    chineseName: "...",
    color: "blue",
  },
  {
    id: "legalist",
    name: "Legalist",
    chineseName: "...",
    color: "gold",
  },
  {
    id: "mingjia",
    name: "School of Names",
    chineseName: "...",
    color: "white",
  },
  // ... more schools
];

export const philosophers = [
  {
    id: "odes",
    name: "Odes",
    chineseName: "詩經",
    school: "confucian",
    major: false,
    dates: [1000, 600], // no source
    string: 4,

    description: ["Important poetry."],

    views: {},

    keyTerms: [
      {
        term: "德",
        pinyin: "dé",
        description: "Moral potency exemplified by ancient sage-kings.",
      },
    ],

    quote:
      "I transmit but do not innovate. (Analects 7.1 — Confucius referencing antiquity)",

    imageRefs: ["assets/images/odes_history.jpg"],
  },

  {
    id: "history",
    name: "History",
    chineseName: "書經",
    school: "confucian",
    major: false,
    dates: [1100, 700], // no source
    string: 4,

    description: [
      "The *History*, or *Shu*, is a record of the events leading to the establishment of the Zhou dynasty. It is one of the \"Five Classics\" of the Confucian tradition, although it predates Confucius by hundreds of years.",
      "The *History*'s record of the Zhou, as well as the semi-mythological history preceding its record, figure large in all of the Chinese thinkers that follow. According to this history of classical China, the first ruler was thought to be a man named Yao. Yao was named Son of Heaven by the people to rule over the \"world\" (China) because of his extraordinary virtue. When Yao grew old, he appointed Shun, the most virtuous man he could find, and Shun appointed Yu as his successor in a similar way. However, rather than searching for a virtuous man as his successor, Yu appointed his son and founded the Xia dynasty. The Xia dynasty and its successor, the Shang dynasty, both started out with good rulers, but each eventually deteriorated into tyranny.  Thus emerged the concept of the \"Mandate of Heaven,\" a right to rule that a ruler could lose through despotism. When rulers lost the Mandate, they could be virtuously overthrown, as the Shang overthrew the Xia and the Zhou overthrew the Shang.",
      "This linking of authority with personal virtue (*dé*) would become crucial in classical Chinese thought, and nearly every thinker would appeal to the *History*'s anecdotes to support their conclusions."
    ],

    views: {},

    keyTerms: [
      {
        term: "德",
        pinyin: "dé",
        description: "Moral potency exemplified by ancient sage-kings.",
      },
    ],

    quote:
      "I transmit but do not innovate. (Analects 7.1 — Confucius referencing antiquity)",

    imageRefs: ["assets/images/odes_history.jpg"],
  },

  {
    id: "confucius",
    name: "Confucius",
    chineseName: "孔子", // Optional but useful for UI
    school: "confucian", // Used to derive color + legend
    major: true, // Distinguish scope/importance
    dates: [551, 479], // Estimated birth and death date, determines position along zither strings in the neutral view
    string: 4, // String to display on in neutral view

    description:
      ["No Chinese thinker was greater or more elusive than Kongzi, or Confucius (the Latin name given to him by the Jesuits). Confucius did not set down his thought . Analects. Yet he introduced the terms that everyone else would redefine over and over again in the following centuries. / Confucius was a traveling thinker in the Spring and Autumn period. Unable or unwilling to take any official position, he became a teacher. / Confucius' philosophy lies in the balancing of opposites. Cultural refinement and simplicity, dutifulness and sympathetic understanding; goodness is spontaneous and situation-specific, but rooted in rituals that come from ancient tradition. Confucius passed on many ideas from antiquity that would become part of the present debate, such as virtue (de) being a corrective force that starts within the individual and extends to the entire state. Confucius gives many examples and does not define his key terms clearly, and this is perhaps part of his elusive wisdom. / Confucius refused to let himself be called an innovator or a sage, but within a few centuries, Xunzi was calling him the greatest sage to have ever lived."],

    // Directionless edges that are solely for display purposes
    relationships: [
      { 
        from: "odes", // from and to both default to self
        kind: "buildsOn",
        emphasis: 0.8, // 0–1; could drive line opacity or thickness
      },
      {
        from: "history",
        kind: "buildsOn",
        emphasis: 0.8,
      },
  ],
    views: {
      odes: {
        quote: "Only with you can I speak of the odes!",
        explanation:
          "Confucius views the Odes as one of the main sources of cultural refinement.",
        display: {
          brightness: 0.5,
          position: { x: -4, y: 2, z: 0 }, // intended to be to the left
        },
      },
      history: {
        quote: "TBA",
        explanation:
          "Confucius sees the history as one of the most important documents of learning.",
        display: {
          brightness: 0.5,
          position: { x: -4, y: -2, z: 0 }, // intended to be to the left
        },
      },
    },

    // Current descriptions are stubs
    keyTerms: [
      {
        term: "德",
        pinyin: "dé",
        description:
          "Virtue, moral charisma, cultivated through ritual practice.",
      },
      {
        term: "道",
        pinyin: "dào",
        description: "The Way; a tradition transmitted from antiquity.",
      },
      {
        term: "無為",
        pinyin: "wúwéi",
        description:
          'Confucius\' version of "wuwei" has less to do with nonaction. Rather, it is a level of virtue to aspire to, at which behaving virtuously becomes effortless.',
      },
      {
        term: "君子",
        pinyin: "jūnzǐ",
        description:
          'Compared to other texts, the Analects spends less time on the sage, focusing instead on the more achievable status of junzi, or "gentleman" (the Chinese term is gender-neutral).',
      },
    ],

    quote: "I transmit but do not innovate. I trust and love the ancients.",

    imageRefs: [
      "assets/images/confucius_rubbing.jpg",
      "assets/images/bronze_inscription.jpg",
    ],
  },

  {
    id: "mozi",
    name: "Mozi",
    chineseName: "墨子",
    school: "mohist",
    major: true,
    dates: [480, 390],
    string: 3,

    relationships: [
      { 
        from: "odes", // from and to both default to self
        kind: "buildsOn",
        emphasis: 0.8, // 0–1; could drive line opacity or thickness
      },
      {
        from: "history",
        kind: "buildsOn",
        emphasis: 0.8,
      },
      {
        to: "confucius",
        kind: "opposes",
        emphasis: 1,
      },
  ],

    views: {
     confucius: {
        quote: "That fellow Kong Qiu...",
        explanation: "Bro hates Confucius",
        display: {
          brightness: 0.5,
          position: { x: 0, y: -6, z: 0 }, // intended to be to the left
        },
      },
     odes: {
        quote: "later chapter stuff",
        explanation:
          "Despite his vicious disapproval of Confucius, Mozi places great authority in the classics. Because of this, by the time of the unification and the Han dynasty, they were often lumped together in the same sentence (Huinanzi and other guy)",
        display: {
          brightness: 0.5,
          position: { x: -4, y: 2, z: 0 }, // intended to be to the left
        },
      },
      history: {
        quote: "later chapter stuff",
        explanation:
          "Despite his vicious disapproval of Confucius, Mozi places great authority in the classics. Because of this, by the time of the unification and the Han dynasty, they were often lumped together in the same sentence (Huinanzi and other guy)",
        display: {
          brightness: 0.5,
          position: { x: -4, y: -2, z: 0 }, // intended to be to the left
        },
      },
    },

    keyTerms: [
      {
        term: "兼愛",
        pinyin: "jiān'ài",
        description: "Impartial care for all.",
      },
      {
        term: "非攻",
        pinyin: "fēi gōng",
        description: "Condemnation of offensive warfare.",
      },
    ],

    quote: "The benevolent care for others impartially.",

    imageRefs: ["assets/images/mozi.jpg"],
  },

  {
    id: "yangzhu",
    name: "Yang Zhu",
    chineseName: "楊朱",
    school: "yangist",
    major: false,
    dates: [440, 360], // from wikipedia, same as Britannica
    string: 5,

    relationships: [
      { targetId: "mozi", kind: "opposes", tone: "negative", strength: 0.8 },
      {
        targetId: "mencius",
        kind: "critiquedBy",
        tone: "negative",
        strength: 0.9,
      },
    ],

    views: {},

    keyTerms: [
      {
        term: "性",
        pinyin: "xìng",
        description: "Human nature centered on preserving one's life.",
      },
    ],

    quote:
      "If plucking a single hair would benefit the world, he would not do it.",

    imageRefs: ["assets/images/yangzhu.jpg"],
  },

  {
    id: "gaozi",
    name: "Gaozi",
    chineseName: "告子",
    school: "mohist",
    major: false,
    dates: [420, 350], // from wikipedia
    string: 3,

    description:
      "Gaozi is a Mohist figure largely known through the chapter of the Mencius bearing his name. While this means that he is unable to speak for himself apart from the Mencius' framing, the character of Gaozi gives some insight into the psychological development of Mohism in parallel with Confucianism.",

    relationships: [
      {
        from: "mozi",
        kind: "buildsOn",
        emphasis: 0.8,
      },
      {
        to: "mencius",
        kind: "opposes",
        emphasis: 1,
      },
  ],

    views: {
     mozi: {
        quote: "...",
        explanation: "Gaozi is portrayed as a characteristic Mohist.",
        display: {
          brightness: 0.5,
          position: { x: -5, y: 0, z: 0 }, // intended to be to the left
        },
      },
     mencius: {
        quote: "question about pulling your sister out of the water",
        explanation:
          "Gaozi and Mencius are portrayed as opposing thinkers.",
        display: {
          brightness: 0.5,
          position: { x: 0, y: -5, z: 0 }, // intended to be to the left
        },
      },
    },

    keyTerms: [
      {
        term: "性",
        pinyin: "xìng",
        description: "Cups and bowls",
      },
    ],

    quote:
      "Man's nature is like a tree, and righteousness is like cups and bowls.",

    imageRefs: ["assets/images/willowtree.jpg"],
  },

  {
    id: "mencius",
    name: "Mencius",
    chineseName: "孟子",
    school: "confucian",
    major: true,
    dates: [371, 289],
    string: 4,

    relationships: [],
    views: {
      yangzhu: {
        quote: "TBA",
        explanation:
          "Mencius saw Yang Zhu as going wrong, but precisely in the opposite direction of Mozi.",
        display: {
          brightness: 0.5,
          position: { x: 3, y: 0, z: 0 }, // intended to be to the left
        },
      },
      mozi: {
        quote: "TBA",
        explanation:
          "Mencius also questions the literal truth of the events in the History, whereas Mozi relies on them to justify how spirits reinforce a just cosmos.",
        display: {
          brightness: 0.5,
          position: { x: -3, y: 0, z: 0 }, // intended to be to the right
        },
      },
      gaozi: {
        quote: "TBA",
        explanation: "TBA",
        display: {
          brightness: 0.5,
          position: { x: -6, y: 0, z: 0 }, // intended to be to the left
        },
      },
      confucius: {
        quote: "I try to be like Confucius.", // from that chapter where he's getting pestered about how proud he is
        explanation: "TBA",
        display: {
          brightness: 0.5,
          position: { x: 0, y: 3, z: 0 }, // intended to be upwards
        },
      },
      history: {
        quote: "I only believe one story from the History.", // from that chapter where he's getting pestered about how proud he is
        explanation: "Mencius directly states his disbelief in the History.",
        display: {
          brightness: 0.5,
          position: { x: -6, y: 6, z: 0 }, // intended to be upwards
        },
      },
    },

    displayPosition: { x: 0, y: 6, z: 0 }, // intended to be directly above
    displayProps: [
      {
        type: "arrow",
        properties: {
          dir: {x: -1, y: 0, z: 0},
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: {x: 1, y: 0, z: 0},
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: {x: 0, y: 1, z: 0},
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
    ],

    keyTerms: [
      {
        term: "性善",
        pinyin: "xìng shàn",
        description: "Human nature is originally good.",
      },
      {
        term: "四端",
        pinyin: "sì duān",
        description: "Four sprouts—beginnings of virtue. The *History*'s record of the Zhou, as well as the semi-mythological history preceding its record, figure large in all of the Chinese thinkers that follow. According to this history of classical China, the first ruler was thought to be a man named Yao. Yao was named Son of Heaven by the people to rule over the \"world\" (China) because of his extraordinary virtue. When Yao grew old, he appointed Shun, the most virtuous man he could find, and Shun appointed Yu as his successor in a similar way. However, rather than searching for a virtuous man as his successor, Yu appointed his son and founded the Xia dynasty. The Xia dynasty and its successor, the Shang dynasty, both started out with good rulers, but each eventually deteriorated into tyranny.  Thus emerged the concept of the \"Mandate of Heaven,\" a right to rule that a ruler could lose through despotism. When rulers lost the Mandate, they could be virtuously overthrown, as the Shang overthrew the Xia and the Zhou overthrew the Shang.",
      },
      {
        term: "性善",
        pinyin: "xìng shàn",
        description: "Human nature is originally good.",
      },
      {
        term: "四端",
        pinyin: "sì duān",
        description: "Four sprouts—beginnings of virtue. The *History*'s record of the Zhou, as well as the semi-mythological history preceding its record, figure large in all of the Chinese thinkers that follow. According to this history of classical China, the first ruler was thought to be a man named Yao. Yao was named Son of Heaven by the people to rule over the \"world\" (China) because of his extraordinary virtue. When Yao grew old, he appointed Shun, the most virtuous man he could find, and Shun appointed Yu as his successor in a similar way. However, rather than searching for a virtuous man as his successor, Yu appointed his son and founded the Xia dynasty. The Xia dynasty and its successor, the Shang dynasty, both started out with good rulers, but each eventually deteriorated into tyranny.  Thus emerged the concept of the \"Mandate of Heaven,\" a right to rule that a ruler could lose through despotism. When rulers lost the Mandate, they could be virtuously overthrown, as the Shang overthrew the Xia and the Zhou overthrew the Shang.",
      },
      {
        term: "性善",
        pinyin: "xìng shàn",
        description: "Human nature is originally good.",
      },
      {
        term: "四端",
        pinyin: "sì duān",
        description: "Four sprouts—beginnings of virtue. The *History*'s record of the Zhou, as well as the semi-mythological history preceding its record, figure large in all of the Chinese thinkers that follow. According to this history of classical China, the first ruler was thought to be a man named Yao. Yao was named Son of Heaven by the people to rule over the \"world\" (China) because of his extraordinary virtue. When Yao grew old, he appointed Shun, the most virtuous man he could find, and Shun appointed Yu as his successor in a similar way. However, rather than searching for a virtuous man as his successor, Yu appointed his son and founded the Xia dynasty. The Xia dynasty and its successor, the Shang dynasty, both started out with good rulers, but each eventually deteriorated into tyranny.  Thus emerged the concept of the \"Mandate of Heaven,\" a right to rule that a ruler could lose through despotism. When rulers lost the Mandate, they could be virtuously overthrown, as the Shang overthrew the Xia and the Zhou overthrew the Shang.",
      },
    ],

    quote: "The heart of compassion is the sprout of benevolence.",

    imageRefs: ["assets/images/mencius.jpg"],
  },

  {
    id: "huizi",
    name: "Huizi",
    chineseName: "惠子",
    school: "mingjia",
    major: false,
    dates: [380, 300], // birth date from Britannica, death just an estimate
    string: 6,

    relationships: [
      //   { targetId: "zhuangzi", kind: "debates", tone: "mixed", strength: 0.9 }
    ],
    views: {
      //   zhuangzi: {
      //     quote: "You are not a fish; how do you know the joy of fish?",
      //     explanation:
      //       "From Huizi’s standpoint, Zhuangzi’s appeals to knowing are suspect; he pushes for stricter logic.",
      //     visualHint: { emphasis: 1.2, connectionStyle: "cross" }
      //   }
    },

    keyTerms: [{ term: "?", pinyin: "?", description: "Placeholder" }],
  },

  {
    id: "gongsunlongzi",
    name: "Gongsun Longzi",
    chineseName: "公孫龍子",
    school: "mingjia",
    major: false,
    dates: [325, 250],
    string: 6,

    relationships: [],

    views: {},

    keyTerms: [
      {
        term: "名・實",
        pinyin: "míng / shí",
        description: "Name and actuality; distinction puzzles.",
      },
    ],

    quote: "A white horse is not a horse.",

    imageRefs: ["assets/images/gongsunlongzi.jpg"],
  },

  {
    id: "neiye",
    name: "Nèiyè/Inward Training",
    chineseName: "內業",
    school: "daoist",
    major: false,
    dates: [350, 350], // from Wikipedia, need to check with book. need some way to indicate this isn't birth and death dates
    string: 2,

    relationships: [
      {
        targetId: "laozi",
        kind: "influences",
        tone: "ambiguous",
        strength: 0.5,
      },
    ],

    views: {},

    keyTerms: [
      {
        term: "氣",
        pinyin: "qì",
        description: "Vital energy cultivated through stillness.",
      },
      {
        term: "定",
        pinyin: "dìng",
        description: "Stabilization of mind and body.",
      },
    ],

    quote: "When the heart is settled, the vital energy becomes aligned.",

    imageRefs: ["assets/images/neiye.jpg"],
  },

  {
    id: "laozi",
    name: "Laozi",
    chineseName: "老子",
    school: "daoist",
    major: true,
    dates: [600, 500], // based on Britannica ("flourished 6th centry BCE"), also need a way of indicating this
    string: 2,

    relationships: [
      {
        targetId: "confucius",
        kind: "critiques",
        tone: "mixed",
        strength: 0.5,
      },
      {
        targetId: "zhuangzi",
        kind: "influences",
        tone: "positive",
        strength: 0.7,
      },
    ],

    views: {},

    keyTerms: [
      {
        term: "無為",
        pinyin: "wúwéi",
        description: "Effortless action; non-coercive alignment.",
      },
      {
        term: "道",
        pinyin: "dào",
        description: "The unnamed source of all things.",
      },
    ],

    quote: "The Dao that can be spoken is not the constant Dao.",

    imageRefs: ["assets/images/laozi.jpg"],
  },

  {
    id: "shendao",
    name: "Shen Dao",
    chineseName: "慎到",
    school: "legalist",
    major: false,
    dates: [350, 275], // wikipedia, may need to go on JSTOR or something for this. No britannica
    string: 7,

    relationships: [
      {
        targetId: "hanfeizi",
        kind: "influences",
        tone: "positive",
        strength: 0.9,
      },
    ],

    views: {},

    keyTerms: [
      {
        term: "勢",
        pinyin: "shì",
        description: "Power/positional authority independent of virtue.",
      },
    ],

    quote:
      "When a man rides a carriage, it is the carriage that is noble, not the man.",

    imageRefs: ["assets/images/shendao.jpg"],
  },

  {
    id: "zhuangzi",
    name: "Zhuangzi",
    chineseName: "莊子",
    school: "daoist",
    major: true,
    dates: [369, 286], // Britannica
    string: 2,

    // How this orb behaves when *others* are the perspective
    focusLayouts: {
      xunzi: { /*targetPosition: [x, y, z],*/ fade: 0.4, scale: 0.8 },
      // etc.
    },

    /**
     * 1) Generic graph-like relationships (directional, labeled edges)
     */
    relationships: [
      {
        targetId: "laozi",
        kind: "buildsOn", // e.g. buildsOn | critiques | parodies | playsWith
        tone: "respectful", // positive | negative | mixed | playful | ambiguous
        strength: 0.5, // 0–1; could drive line opacity or thickness
        notes: "Often riffing on Daodejing themes but more playful.",
      },
      {
        targetId: "confucius",
        kind: "playsWithCharacter",
        tone: "playful",
        strength: 0.7,
        notes: "Uses Kongzi as a foil in stories.",
      },
      {
        targetId: "gaozi",
        kind: "critiques",
        tone: "playful",
        strength: 0.7,
        notes: "",
      },
      {
        targetId: "huizi",
        kind: "friendRival",
        tone: "affectionate",
        strength: 0.9,
        notes: "Intellectual sparring partner; deep respect and teasing.",
      },
    ],

    /**
     * 2) Perspective-specific “view” data:
     * what it looks like when *this* philosopher is the perspective
     * and you click on someone else.
     */
    views: {
      huizi: {
        quote:
          "Master Bright Works playing his lute, Huizi leaning at his desk...",
        explanation:
          "Zhuangzi treats Huizi as a brilliant but anxious logician—someone he respects deeply " +
          "but also thinks is trapped in distinctions and argument.",
        visualHint: {
          emphasis: 1.3, // extra scale or brightness for Huizi in Zhuangzi-view
          connectionStyle: "loop", // e.g. you might pick a special line style between them
          proximityBias: -0.2, // maybe pull Huizi slightly closer / farther in layout
        },
      },
      confucius: {
        quote:
          "This would make Huang Di’s ears ring. How could Kongzi understand it?",
        explanation:
          "Kongzi becomes a kind of straight man or foil—worthy but limited, bound to names and rituals.",
        visualHint: {
          emphasis: 1.1,
          connectionStyle: "zigzag",
        },
      },
      gaozi: {
        quote: "Mohists and Confucians right each other's wrongs...",
        explanation: "",
        visualHint: {
          emphasis: 1.1,
          connectionStyle: "zigzag",
        },
      },
      // …other targets from Zhuangzi’s perspective if you want
    },

    keyTerms: [
      {
        term: "道",
        pinyin: "dào",
        description: "The wandering, shifting Way beyond fixed distinctions.",
      },
    ],

    quote:
      "There is nothing that is not 'that'; there is nothing that is not 'this'.",
    imageRefs: ["assets/images/zhuangzi_bamboo_slip.jpg"],
  },

  {
    id: "xunzi",
    name: "Xunzi",
    chineseName: "荀子",
    school: "confucian",
    major: true,
    dates: [300, 230], // Britannica
    string: 4,

    relationships: [
      {
        targetId: "mencius",
        kind: "disagrees",
        tone: "negative",
        strength: 1.0,
        notes: "Rejects Mencius’ claim that human nature is good.",
      },
      { targetId: "laozi", kind: "critiques", tone: "negative", strength: 0.8 },
    ],

    views: {},

    keyTerms: [
      {
        term: "性惡",
        pinyin: "xìng è",
        description: "Human nature is bad; goodness is cultivated.",
      },
      {
        term: "禮",
        pinyin: "lǐ",
        description: "Ritual as the system that shapes desires.",
      },
    ],

    quote: "Human nature is bad; goodness is a matter of deliberate activity.",

    imageRefs: ["assets/images/xunzi.jpg"],
  },

  {
    id: "lordshang",
    name: "Lord Shang",
    chineseName: "商鞅",
    school: "legalist",
    major: true,
    dates: [390, 338], // Britannica
    string: 7,

    relationships: [
      {
        targetId: "confucius",
        kind: "opposes",
        tone: "negative",
        strength: 1.0,
      },
      {
        targetId: "hanfeizi",
        kind: "influences",
        tone: "positive",
        strength: 1.0,
      },
    ],

    views: {},

    keyTerms: [
      { term: "法", pinyin: "fǎ", description: "Clear, public, strict laws." },
      {
        term: "恩",
        pinyin: "ēn",
        description:
          'Lord Shang claims that the ultimate effect of strict laws will produce (or be viewed as) "ēn", often translated as "kindness".',
      },
    ],

    quote: "When laws are fixed and clear, the people cannot be unruly.",

    imageRefs: ["assets/images/lordshang.jpg"],
  },

  {
    id: "shenbuhai",
    name: "Shen Buhai",
    chineseName: "申不害",
    school: "legalist",
    major: false,
    dates: [400, 337], // wikipedia
    string: 7,

    relationships: [
      {
        targetId: "hanfeizi",
        kind: "influences",
        tone: "positive",
        strength: 1.0,
      },
    ],

    views: {},

    keyTerms: [
      {
        term: "術",
        pinyin: "shù",
        description:
          'Often translated as "administrative methods"; a system developed by Shen Buhai to assess the performance of officials by comparing míng and xíng. ',
      },
      {
        term: "名",
        pinyin: "míng",
        description: '"Name", or the propositions ministers give.',
      },
      {
        term: "刑",
        pinyin: "xíng",
        description:
          '"Form", or the actual results of the duties assigned to the ministers.',
      },
    ],

    quote: "",

    imageRefs: [],
  },

  {
    id: "hanfeizi",
    name: "Han Feizi",
    chineseName: "韓非子",
    school: "legalist",
    major: true,
    dates: [280, 233],
    string: 7,

    relationships: [
      {
        targetId: "lordshang",
        kind: "buildsOn",
        tone: "neutral",
        strength: 1.0,
      },
      { targetId: "mencius", kind: "rejects", tone: "negative", strength: 1.0 },
      { targetId: "shendao", kind: "buildsOn", tone: "neutral", strength: 0.8 },
    ],

    views: {},

    keyTerms: [
      {
        term: "法",
        pinyin: "fǎ",
        description: "Law as the objective standard of governance.",
      },
      {
        term: "勢",
        pinyin: "shì",
        description: "Power/authority of position.",
      },
      {
        term: "術",
        pinyin: "shù",
        description: "Administrative methods and control.",
      },
    ],

    quote: "The wise ruler uses law, not virtue, to govern.",

    imageRefs: ["assets/images/hanfeizi.jpg"],
  },
];
