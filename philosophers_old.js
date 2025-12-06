// philosophers.js (old)
// Keeping this file because there's no easy way to transfer comments over

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

    description: [
      'The Odes is a collection of poetry and one of the "Five Classics" of the Confucian traidition, although it predates Confucius. The Odes include folk songs as well as poems about the Zhou dynasty. Appealing to the Odes through interpretation of its poems would become a critical tactic for Confucius, Mozi, Mencius, and later thinkers in their traditions.',
    ],

    views: {},

    keyTerms: [
      {
        id: "de",
        term: "德",
        pinyin: "dé",
        description:
          'The term "de", as it is used in the early classical texts, refers to a kind of "royal virtue" and is less defined in terms of moral characteristics. It is a kind of spiritual power and authority maintained through proper conduct as a ruler.',
      },
    ],

    quote: "",

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
      'The *History*, or *Shu*, is a record of the events leading to the establishment of the Zhou dynasty. It is one of the "Five Classics" of the Confucian tradition, although it predates Confucius by hundreds of years.',
      'The *History*\'s record of the Zhou, as well as the semi-mythological history preceding its record, figure large in all of the Chinese thinkers that follow. According to this history of classical China, the first ruler was thought to be a man named Yao. Yao was named Son of Heaven by the people to rule over the "world" (China) because of his extraordinary virtue. When Yao grew old, he appointed Shun, the most virtuous man he could find, and Shun appointed Yu as his successor in a similar way. However, rather than searching for a virtuous man as his successor, Yu appointed his son and founded the Xia dynasty. The Xia dynasty and its successor, the Shang dynasty, both started out with good rulers, but each eventually deteriorated into tyranny.  Thus emerged the concept of the "Mandate of Heaven," a right to rule that a ruler could lose through despotism. When rulers lost the Mandate, they could be virtuously overthrown, as the Shang overthrew the Xia and the Zhou overthrew the Shang.',
      "This linking of authority with personal virtue (*dé*) would become crucial in classical Chinese thought, and nearly every thinker would appeal to the *History*'s anecdotes to support their conclusions.",
    ],

    views: {},

    keyTerms: [
      {
        id: "de",
        term: "德",
        pinyin: "dé",
        description:
          'The term "de", as it is used in the early classical texts, refers to a kind of "royal virtue" and is less defined in terms of moral characteristics. It is a kind of spiritual power and authority maintained through proper conduct as a ruler.',
      },
    ],

    quote: "",

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

    description: [
      "No Chinese thinker was greater or more elusive than Kongzi, or Confucius (the Latin name given to him by the Jesuits). Confucius refused to set down his ideas himself. Much of what we know about him comes from the anecdotes and saying in the Analects, which presents itself as a collection compiled by his followers. Yet Confucius set out the terms that everyone else would redefine over and over again in the following centuries.",
      "Confucius was a traveling thinker in the Spring and Autumn period. Unable or unwilling to take any official position, he became an independent teacher. Confucius' philosophy lies in the balancing of opposites: cultural refinement and peasant-like simplicity, dutifulness to one's social role and flexible sympathetic understanding. To Confucius, goodness is spontaneous and situation-specific, but rooted in rituals that come from ancient tradition.",
      "Confucius gives many examples and does not define his key terms clearly, and this is perhaps part of his elusive wisdom. Through this roundabout method, he refined many concepts from antiquity that would be heavily debated in the coming centuries. Confucius refused to let himself be called an innovator or a sage, but within a few centuries, Xunzi was calling him the greatest sage to have ever lived.",
    ],

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
        id: "de",
        term: "德",
        pinyin: "dé",
        description:
          'Confucius reinterprets "de" as moral charisma, cultivated through ritual practice. It is a corrective force that starts within the individual and can influence the entire state.',
      },
      {
        id:"dao",term: "道",
        pinyin: "dào",
        description:
          'In the Analects, "dao" can refer to the way a specific thing is done, or the way a person lives. Generally, it is the right or virtuous way to live.',
      },
      {
        id:"wuwei",term: "無為",
        pinyin: "wúwéi",
        description:
          'Confucius uses "wuwei" to describe an unachievable state of virtue, at which behaving virtuously becomes effortless.',
      },
      {
        id:"junzi",term: "君子",
        pinyin: "jūnzǐ",
        description:
          'Compared to other texts, the Analects spends less time on the sage, focusing instead on the more achievable status of "junzi", or "gentleman" (the Chinese term is gender-neutral). The gentleman is not perfect, but has reached a reasonable level of self-cultivation as outlined by Confucius.',
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

    description: [
      "Mozi was a thinker of modest background who advocated for a hierarchical authoritarian society, founded on a belief in a just cosmos that rewards the good and punishes the bad. Mozi's consequentialist ethics have little regard for anything beyond the wealth, population, and order of the state. His followers were referred to as Mohists.",
    ],

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
        explanation:
          "Mozi critiques Confucius harshly to the point of disrespect. He interprets Confucius' love of music as a love of excess and Confucius' praise of filial piety over state loyalty as a violation of impartial caring.",
        display: {
          brightness: 0.5,
          position: { x: 0, y: -6, z: 0 }, // intended to be to the left
        },
      },
      odes: {
        quote: "", // chapter about king's burial
        explanation:
          "Despite his vicious disapproval of Confucius, Mozi places great authority in the same classical documents, such as the Odes. Mozi appeals to the Odes at one point to argue that ghosts and spirits are real. Because of their common heritage, by the time of the unification and the Han dynasty, Confucius and Mozi were often lumped together in the same category.", //  (Huinanzi and other guy)
        display: {
          brightness: 0.5,
          position: { x: -4, y: 2, z: 0 }, // intended to be to the left
        },
      },
      history: {
        quote: "", //
        explanation:
          "In addition to the Odes, Mozi also appeals to the History to support the existence of ghosts. In addition, he its stories of rulers who were buried in nondescript ways to advocate for modest burials, which later became a hallmark of Mohism.",
        display: {
          brightness: 0.5,
          position: { x: -4, y: -2, z: 0 }, // intended to be to the left
        },
      },
    },

    keyTerms: [
      {
        id:"jianai",term: "兼愛",
        pinyin: "jiān'ài",
        description:
          'Mozi\'s term "jian\'ai" literally translates to "impartial caring". It describes a highly rationalist moral system in which every person should be prioritized equally and held to the same standards, with notions like noble birth eliminated.',
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

    description: [
      'Yang Zhu is a figure who survives only in the caricatures of other writers, and he may potentially be mythological. These portrayals suggest that Yang Zhu supported self-satisfaction, on the basis that following one\'s "nature" ("xing") aligns with Heaven ("tian"). The emergence of Yang Zhu marked an enormous turning point: human nature, which Confucius had refused to speak of, now took center stage. ',
    ],
    relationships: [],

    views: {},

    keyTerms: [
      {
        id:"xing_nature",
        term: "性",
        pinyin: "xìng",
        description:
          '"xing" refers to human nature. Since it is given by heaven, it is basically good. Yang Zhu\'s philosophy implied that this nature can be trusted to lead people in the right direction.',
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

    description: [
      "Gaozi is a Mohist figure largely known through the chapter of the Mencius bearing his name. While this means that he is unable to speak for himself apart from the Mencius' framing, the character of Gaozi gives some insight into the psychological development of Mohism in parallel with Confucianism.",
    ],

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
        quote: "",
        explanation:
          "In the Mencius, Gaozi is portrayed as a characteristic follower of Mozi, carrying on with Mencius the animosity between Confucius and Mozi.",
        display: {
          brightness: 0.5,
          position: { x: -5, y: 0, z: 0 }, // intended to be to the left
        },
      },
      mencius: {
        quote: "", //question about pulling your sister out of the water",
        explanation:
          "In the Mencius, Gaozi acts as a foil to Mencius, and his challenges allow Mencius to expand on his philosophy (and look good).",
        display: {
          brightness: 0.5,
          position: { x: 0, y: -5, z: 0 }, // intended to be to the left
        },
      },
    },

    keyTerms: [
      {
        id:"xing_nature",
        term: "性",
        pinyin: "xìng",
        description:
          'Gaozi says to Mencius that human nature ("xing") is like a tree, and that righteousness is like "cups and bowls". Basically, human nature must be molded by force to become good.',
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

    description: [
      "Mengzi, or Mencius (Jesuit Latin name), was a traveling thinker who based his philosophy on Confucius. However, he elaborated it in much more detail, describing human nature (\"xing\") as similar to sprouts: basically good, but capable of going bad with neglect. Mencius' life and sayings were written down as dialogs in a text bearing his name, which is more cohesive than the Analects. Mencius' version of Confucianism ultimately became standard after the unification of China.",
    ],

    relationships: [],
    views: {
      yangzhu: {
        quote: "",
        explanation:
          "Mencius saw Yang Zhu as going wrong, but precisely in the opposite direction of Mozi. Yang Zhu's unrestrained sanctioning of following one's nature is dangerous, as the sprouts of virtue require intentional care.", // ???
        display: {
          brightness: 0.5,
          position: { x: 3, y: 0, z: 0 }, // intended to be to the left
        },
      },
      mozi: {
        quote: "",
        explanation:
          "Mencius sees Mozi's impartial caring (\"jian'ai\") as an unachievable version of morality. Real goodness must start with one's family, and only then can it be extended outwards with training. Unlike Mozi, Mencius also questions the literal truth of the events in the History, whereas Mozi relies on their literal truth to claim the reality of a just cosmos.",
        display: {
          brightness: 0.5,
          position: { x: -3, y: 0, z: 0 }, // intended to be to the right
        },
      },
      gaozi: {
        quote: "",
        explanation:
          "Gaozi, a Mohist, is presented in the eponymous chapter of the Mencius as a foil to Mencius. Gaozi's questions allow Mencius to display his nuanced view of human nature, which refutes the two extremes of the Mohists and the Yangists.",
        display: {
          brightness: 0.5,
          position: { x: -6, y: 0, z: 0 }, // intended to be to the left
        },
      },
      confucius: {
        quote: "", //I try to be like Confucius.", // from that chapter where he's getting pestered about how proud he is
        explanation:
          "Mengzi takes Confucius as his model. To Mencius, Confucius walks a middle path that doesn't stray into the dangerous extremes of the Mohists or Yangists. While Mengzi at times expresses humility, it is unclear how humble he truly is, as he is willing to elaborate on subjects that Confucius refused to cover.",
        display: {
          brightness: 0.5,
          position: { x: 0, y: 3, z: 0 }, // intended to be upwards
        },
      },
      history: {
        quote: "", // I only believe one story from the History.", // from that chapter where he's getting pestered about how proud he is
        explanation:
          "Mencius takes a critical attitude towards the Classics. While still using them as a source of argumentation, Mencius clearly states his disbelief in a literal reading of the History.",
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
          dir: { x: -1, y: 0, z: 0 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 1, y: 0, z: 0 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0, y: 1, z: 0 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
    ],

    keyTerms: [
      {
        id:"xing_nature",
        term: "性",
        pinyin: "xìng",
        description:
          'Unlike the Mohists, Mencius considers human nature ("xìng") to be essentially good (善, "shàn"), although not to the extent of the Yangists.',
      },
      {
        id: "siduan",
        term: "四端",
        pinyin: "sì duān",
        description:
          "Mencius described goodness as having sprouts of benevolence, righteousness, propriety, and wisdom, each rooted in basic human attitudes and instinctual reactions. Cultivated properly, not forced out of the ground like the Mohists or left to wither like the Yangists, these sprouts will mature.",
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

    description: [
      "Huizi was a logician whose only surviving work is a fragment known as the \"Theses\". These fragments, as well as other writers' portrayals of him, suggest he was a metaphysician and logician interested in paradoxes of space and language. He influenced both Zhuangzi, likely a friend of Huizi's, who admired him but saw his efforts as ultimately futile, and Xunzi, who critiqued his single-mindedness.",
    ],

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

    keyTerms: [], //{ term: "?", pinyin: "?", description: "Placeholder" }],
  },

  {
    id: "gongsunlongzi",
    name: "Gongsun Longzi",
    chineseName: "公孫龍子",
    school: "mingjia",
    major: false,
    dates: [325, 250],
    string: 6,

    description: [
      'Gongsun Longzi was another philosopher of the "School of Names". Similar to Huizi, he is known for his philosophy of language. His most famous claim, "A white horse is not a horse," plays with the precise meaning of the word 非 (is not) and was later picked up by Zhuangzi.',
    ],

    relationships: [],

    views: {},

    keyTerms: [
      // {
      //   term: "名・實",
      //   pinyin: "míng / shí",
      //   description: "Name and actuality; distinction puzzles.",
      // },
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

    description: [
      'The Inward Training ("Neiye") is a text of unknown authorship, which lays out a cosmology of the Dao (or Way) and outlines a mystical practice for attaining inner power and calmness. Some believe it provided the basic spiritual practice that later texts, such as the Laozi, built upon, while others see it as a practical application of the Laozi. Regardless, it presents the emerging idea of the Dao as an underlying cosmic force, with which one can acknowledge and/or align oneself to their benefit.',
    ],

    relationships: [
      {
        to: "laozi", // eh
        kind: "buildsOn",
        emphasis: 0.5,
      },
    ],
    views: {
      laozi: {
        quote: "",
        explanation:
          "The Neiye may be an individual practice based on the Laozi, or the Laozi may be an extension of the Neiye's cosmology.",
        display: {
          brightness: 0.5,
          position: { x: 2, y: 0, z: 0 }, // intended to be to the left
        },
      },
    },
    displayPosition: { x: -2, y: 0, z: 0 },

    keyTerms: [
      {
        id:"dao",term: "道",
        // five grains quote
        pinyin: "dào",
        description:
          'The Dao is a cosmic force that pervades everything, but can only be known and harnessed through inner contemplation. The Neiye suggests that this gives one insight into the future and a supernatural understanding of the "myriad things".',
      },
      {
        id:"qi",term: "氣",
        // five grains quote
        pinyin: "qì",
        description:
          'Qi, or "vital energy", makes up everything in the cosmos. It comes in various forms and moves in various ways. Good health and inner power require healthy regulation of one\'s qi.',
      },
      {
        id:"jing",term: "精",
        // five grains quote
        pinyin: "jīng",
        description:
          'Jing, or "vital essence", is the highest form of qi and is only possessed by living beings.',
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

    description: [
      'Laozi, literally "old master", refers to a text also known as the Daodejing (literally "the classic of dao and de") and also to a likely mythological figure. The Laozi features a cosmology centered around the Dao (Way), which is portrayed as the formless and unknowable unity out of which determinate things emerge and return. The Laozi suggests that suppleness, weakness, and stillness beat the application of force and energetic behavior, and it applies this notion to war and political theory.',
    ],

    relationships: [
      {
        from: "confucius",
        kind: "opposes",
        emphasis: 0.5,
      },
      {
        to: "neiye",
        kind: "buildsOn",
        emphasis: 0.5,
      },
    ],

    views: {
      confucius: {
        quote: "",
        explanation:
          "While the Laozi does not mention any other figures by name, it mentions ritual in a negative light as the lowest form of virtue.",
        display: {
          brightness: 0.5,
          position: { x: -2, y: -4, z: 0 }, // intended to be to the left
        },
      },
      neiye: {
        quote: "",
        explanation:
          "The Neiye may be an individual practice based on the Laozi, or the Laozi may be an extension of the Neiye's cosmology.",
        display: {
          brightness: 0.5,
          position: { x: 2, y: 0, z: 0 }, // intended to be to the left
        },
      },
    },
    displayPosition: { x: -2, y: 0, z: 0 },

    keyTerms: [
      {
        id:"wuwei",term: "無為",
        pinyin: "wúwéi",
        description:
          "The Laozi uses wuwei (nonaction) to refer to a state of emptiness and stillness which one should actively seek in the self-cultivation process. This nonaction is not fully literal--one should seek to act in a state of nonaction. It is crucial in the Laozi, unlike Confucius' aspirational wuwei (which is more of a distant end state).",
      },
      {
        id:"dao",term: "道",
        pinyin: "dào",
        description:
          "The Dao is the unknowable, undifferentiated mass that exists before anything else exists. Once things die or break down, they return back to the Dao. One can seek alignment with the Dao through suppleness and weakness, or try to use force and be broken by it.",
      },
      {
        id: "de",
        term: "德",
        pinyin: "dé",
        description:
          'De, often appearing as "enigmatic virtue" in the Laozi, reaches its highest form in simplicity, not in cleverness, education, or learning. Ritual and duty is the form it takes when it has declined.',
      },
    ],

    quote: "A Way (Dao) that can be followed (Dao) is not a constant Way.",

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

    description: [
      'Shen Dao is a thinker who focused on political theory and whose work only survives in the form of the "Shenzi fragments". Shen Dao claimed that when the law is as automatic and impartial as nature itself, the people will not build resentment towards the ruler or each other. Xunzi critiqued his ideas, and Han Feizi built on them.',
    ],

    relationships: [
      {
        from: "laozi",
        kind: "buildsOn",
        strength: 0.8,
      },
    ],
    //"The Way of Heaven is such that if you \"follow\" then you will be great, while if you alter then you will be insignificant." (Section 2)
    views: {
      laozi: {
        quote:
          'The Way of Heaven is such that if you "follow" then you will be great, while if you alter then you will be insignificant.',
        explanation:
          'Some of Shen Dao\'s ideas seem based on the Laozi: he refers to the paradoxical nature of the "Way of Heaven", as well as claiming that a ruler must not try to handle everything individually or force others to change.',
        display: {
          brightness: 0.5,
          position: { x: -2, y: 0, z: 0 }, // intended to be to the left
        },
      },
    },
    basePosition: { x: 2, y: 0, y: 0 },

    keyTerms: [
      /* {
        term: "勢",
        pinyin: "shì",
        description: "Power/positional authority independent of virtue.",
      }, */
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

    description: [],

    relationships: [
      {
        from: "laozi",
        to: "confucius",
        kind: "opposes",
        emphasis: 0.5,
      },
      {
        from: "gaozi",
        to: "mencius",
        kind: "opposes",
        emphasis: 0.5,
      },
    ],

    /**
     * Perspective-specific “view” data:
     * what it looks like when *this* philosopher is the perspective
     * and you click on someone else.
     */
    views: {
      huizi: {
        quote:
          "Master Bright Works playing his lute, Huizi leaning at his desk: none achieved greater than these...",
        explanation:
          "Multiple dialogs in the Zhuangzi are a discussion between Huizi and Zhuangzi. Huizi often plays the rational, logical foil to Zhuangzi's absurdity. Outside of these scenes, Zhuangzi treats him as a brilliant but futile thinker, someone he respects deeply but also thinks is trapped in distinctions.",
        display: {
          brightness: 1,
          position: { x: -2, y: -2, z: 0 },
        },
      },
      confucius: {
        quote:
          "This would make Huang Di’s ears ring. How could Kongzi understand it?",
        explanation:
          "Kongzi appears as a kind of straight man in many of Zhuangzi's dialogs. At times he seems to eloquently voice Zhuangzi's views about the sage; at other times he is short-sighted or makes blunders he immediately regrets.",
        display: {
          brightness: 1,
          position: { x: 2, y: -2, z: 0 },
        },
      },
      laozi: {
        quote: "When Laozi died...",
        explanation:
          //https://iep.utm.edu/laozi/
          "Laozi appears as a character in the inner chapters of the Zhuangzi multiple times, usually critiquing Confucius. One major scene is Laozi's funeral, which is one of the first times Zhuangzi's attitude towards death is expressed (it's just another transformation).",
        display: {
          brightness: 1,
          position: { x: 0, y: 1.5, z: 0 },
        },
      },
      mencius: {
        quote: "The sprouts of goodness are all tangled...",
        explanation: "",
        display: {
          brightness: 1,
          position: { x: 4, y: -4, z: 0 },
        },
      },
      gaozi: {
        quote: "Mohists and Confucians right each other's wrongs...",
        explanation: "",
        display: {
          brightness: 1,
          position: { x: -4, y: -4, z: 0 },
        },
      },
      // …other targets from Zhuangzi’s perspective if you want
    },
    displayPosition: { x: 0, y: 4.5, z: 0 },

    keyTerms: [
      {
        id:"dao",term: "道",
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
      /*  {
        targetId: "mencius",
        kind: "disagrees",
        tone: "negative",
        strength: 1.0,
        notes: "Rejects Mencius’ claim that human nature is good.",
      },
      { targetId: "laozi", kind: "critiques", tone: "negative", strength: 0.8 }, */
    ],

    views: {
      confucius: {
        quote: "",
        explanation:
          'Xunzi sees Confucius as the greatest sage in history. Unlike the later thinkers, Confucius did not fall into the trap of getting fixated on "one corner of the way".',
        display: {
          brightness: 1,
          position: { x: 0, y: 0, z: 0 },
        },
      },
      mozi: {
        quote: "Mozi focused on profit, but did not understand proper form.",
        explanation:
          "Xunzi sees Mozi as focusing on material profit at the expense of the proper form of ritual, which has inherent value.",
        display: {
          brightness: 1,
          position: { x: 0.0, y: 6.0, z: 0.0 },
        },
      },
      mencius: {
        quote: "Human nature is bad.",
        explanation:
          "Xunzi sees Mencius' description of human nature as dangerous. Implying that goodness comes about naturally, like sprouts growing, will cause people to mistakenly neglect the difficult task of self-cultivation.",
        display: {
          brightness: 1,
          position: { x: 2.78, y: 3.88, z: -3.6 },
        },
      },
      laozi: {
        quote: "",
        explanation:
          "Xunzi writes that Laozi understood the virtue of not acting, but did not understand the role of intentional action.",
        display: {
          brightness: 1,
          position: { x: -1.4, y: 1.76, z: -5.5 },
        },
      },
      shendao: {
        quote: "",
        explanation:
          "Xunzi writes that Shen Dao understood the importance of the law, but did not understand the role of individual virtue.",
        display: {
          brightness: 1,
          position: { x: -5.5, y: -0.3, z: -2.2 },
        },
      },
      huizi: {
        quote: "",
        explanation:
          "Xunzi writes that Huizi was a master of words, but did not comprehend the importance of actual things.",
        display: {
          brightness: 1,
          position: { x: -4.7, y: -2.4, z: 2.74 },
        },
      },
      zhuangzi: {
        quote: "",
        explanation:
          "Xunzi writes that Zhuangzi wrote about Heaven's perspective while neglecting the essential human perspective.",
        display: {
          brightness: 1,
          position: { x: -0.4, y: -4.5, z: 3.83 },
        },
      },
    },

    displayProps: [
      // !!! horrible
      {
        type: "arrow",
        properties: {
          dir: { x: 0.0, y: 1.0, z: 0.0 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.3, y: 0.88, z: -0.3 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.05, y: 0.76, z: 0.64 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.46, y: 0.64, z: -0.6 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.8, y: 0.52, z: 0.14 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.76, y: 0.41, z: 0.48 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.2, y: 0.29, z: -0.9 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.4, y: 0.17, z: 0.87 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.93, y: 0.05, z: -0.3 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.9, y: -0.0, z: -0.3 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.41, y: -0.1, z: 0.89 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.28, y: -0.2, z: -0.9 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.7, y: -0.4, z: 0.45 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.82, y: -0.5, z: 0.18 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.4, y: -0.6, z: -0.6 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.0, y: -0.7, z: 0.63 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: 0.35, y: -0.8, z: -0.3 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
      {
        type: "arrow",
        properties: {
          dir: { x: -0.0, y: -1.0, z: -0.0 },
          length: 9,
          color: "white",
          headLength: 1,
          headWidth: 0.2,
        },
      },
    ],

    displayPosition: { x: 2.5, y: 0, z: 0 },

    keyTerms: [
      {
        id:"xing_nature",
        term: "性",
        pinyin: "xìng",
        description:
          "Strongly against Mencius, Xunzi argues that human nature (xing) is fundamentally bad (惡, è).",
      },
      {
        id: "li",
        term: "禮",
        pinyin: "lǐ",
        description:
          "Xunzi strongly praises ritual as the system that gives proper form to human dispositions.",
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
      { id:"fa",term: "法", pinyin: "fǎ", description: "Clear, public, strict laws." },
      {
        id:"en",term: "恩",
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

    relationships: [],

    views: {},

    keyTerms: [
      {
        id:"shu",term: "術",
        pinyin: "shù",
        description:
          'Often translated as "administrative methods"; a system developed by Shen Buhai to assess the performance of officials by comparing míng and xíng. ',
      },
      {
        id:"ming",term: "名",
        pinyin: "míng",
        description: '"Name", or the propositions ministers give.',
      },
      {
        id:"xing_form",term: "刑",
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
        id:"fa",term: "法",
        pinyin: "fǎ",
        description: "Law as the objective standard of governance.",
      },
      {
        id:"shi",
        term: "勢",
        pinyin: "shì",
        description: "Power/authority of position.",
      },
      {
        id:"shu",term: "術",
        pinyin: "shù",
        description: "Administrative methods and control.",
      },
    ],

    quote: "The wise ruler uses law, not virtue, to govern.",

    imageRefs: ["assets/images/hanfeizi.jpg"],
  },
];
