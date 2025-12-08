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
    id: 'odes',
    name: 'Odes',
    chineseName: '詩經',
    school: 'confucian',
    major: false,
    dates: [ 1000, 600 ],
    string: 4,
    views: {},
    keyTerms: [ { id: 'de', term: '德', pinyin: 'dé' } ],
    imageRefs: [ 'assets/images/odes_history.jpg' ]
  },
  {
    id: 'history',
    name: 'History',
    chineseName: '書經',
    school: 'confucian',
    major: false,
    dates: [ 1100, 700 ],
    string: 4,
    views: {},
    keyTerms: [ { id: 'de', term: '德', pinyin: 'dé' } ],
    imageRefs: [ 'assets/images/odes_history.jpg' ]
  },
  {
    id: 'confucius',
    name: 'Confucius',
    chineseName: '孔子',
    school: 'confucian',
    major: true,
    dates: [ 551, 479 ],
    string: 4,
    relationships: [
      { from: 'odes', kind: 'buildsOn', emphasis: 0.8 },
      { from: 'history', kind: 'buildsOn', emphasis: 0.8 }
    ],
    views: {
      odes: { display: { brightness: 0.5, position: { x: -4, y: 2, z: 0 } } },
      history: {
        display: { brightness: 0.5, position: { x: -4, y: -2, z: 0 } }
      }
    },
    keyTerms: [
      { id: 'de', term: '德', pinyin: 'dé' },
      { id: 'dao', term: '道', pinyin: 'dào' },
      { id: 'wuwei', term: '無為', pinyin: 'wúwéi' },
      { id: 'junzi', term: '君子', pinyin: 'jūnzǐ' }
    ],
    imageRefs: [
      'assets/images/confucius_rubbing.jpg',
      'assets/images/bronze_inscription.jpg'
    ]
  },
  {
    id: 'mozi',
    name: 'Mozi',
    chineseName: '墨子',
    school: 'mohist',
    major: true,
    dates: [ 480, 390 ],
    string: 3,
    relationships: [
      { from: 'odes', kind: 'buildsOn', emphasis: 0.8 },
      { from: 'history', kind: 'buildsOn', emphasis: 0.8 },
      { to: 'confucius', kind: 'opposes', emphasis: 1 }
    ],
    views: {
      confucius: { display: { brightness: 0.5, position: { x: 0, y: -6, z: 0 } } },
      odes: { display: { brightness: 0.5, position: { x: -4, y: 2, z: 0 } } },
      history: {
        display: { brightness: 0.5, position: { x: -4, y: -2, z: 0 } }
      }
    },
    keyTerms: [ { id: 'jianai', term: '兼愛', pinyin: "jiān'ài" } ],
    imageRefs: [ 'assets/images/mozi.jpg' ]
  },
  {
    id: 'yangzhu',
    name: 'Yang Zhu',
    chineseName: '楊朱',
    school: 'yangist',
    major: false,
    dates: [ 440, 360 ],
    string: 5,
    relationships: [],
    views: {},
    keyTerms: [ { id: 'xing_nature', term: '性', pinyin: 'xìng' } ],
    imageRefs: [ 'assets/images/yangzhu.jpg' ]
  },
  {
    id: 'gaozi',
    name: 'Gaozi',
    chineseName: '告子',
    school: 'daoist',
    major: false,
    dates: [ 420, 350 ],
    string: 3,
    relationships: [
      { to: 'mencius', kind: 'opposes', emphasis: 1 }
    ],
    views: {
      mencius: { display: { brightness: 0.5, position: { x: 0, y: -5, z: 0 } } }
    },
    keyTerms: [ { id: 'xing_nature', term: '性', pinyin: 'xìng' } ],
    imageRefs: [ 'assets/images/willowtree.jpg' ]
  },
  {
    id: 'mencius',
    name: 'Mencius',
    chineseName: '孟子',
    school: 'confucian',
    major: true,
    dates: [ 371, 289 ],
    string: 4,
    relationships: [],
    views: {
      yangzhu: { display: { brightness: 0.5, position: { x: 3, y: 0, z: 0 } } },
      mozi: { display: { brightness: 0.5, position: { x: -3, y: 0, z: 0 } } },
      gaozi: { display: { brightness: 0.5, position: { x: -6, y: 0, z: 0 } } },
      confucius: { display: { brightness: 0.5, position: { x: 0, y: 3, z: 0 } } },
      history: { display: { brightness: 0.5, position: { x: -6, y: 6, z: 0 } } }
    },
    displayPosition: { x: 0, y: 6, z: 0 },
    displayProps: [
      {
        type: 'arrow',
        properties: {
          dir: { x: -1, y: 0, z: 0 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 1, y: 0, z: 0 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0, y: 1, z: 0 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      }
    ],
    keyTerms: [
      { id: 'xing_nature', term: '性', pinyin: 'xìng' },
      { id: 'siduan', term: '四端', pinyin: 'sì duān' }
    ],
    imageRefs: [ 'assets/images/mencius.jpg' ]
  },
  {
    id: 'huizi',
    name: 'Huizi',
    chineseName: '惠子',
    school: 'mingjia',
    major: false,
    dates: [ 380, 300 ],
    string: 6,
    relationships: [],
    views: {},
    keyTerms: []
  },
  {
    id: 'gongsunlongzi',
    name: 'Gongsun Longzi',
    chineseName: '公孫龍子',
    school: 'mingjia',
    major: false,
    dates: [ 325, 250 ],
    string: 6,
    relationships: [],
    views: {},
    keyTerms: [],
    imageRefs: [ 'assets/images/gongsunlongzi.jpg' ]
  },
  {
    id: 'neiye',
    name: 'Nèiyè/Inward Training',
    chineseName: '內業',
    school: 'daoist',
    major: false,
    dates: [ 350, 350 ],
    string: 2,
    relationships: [ { to: 'laozi', kind: 'buildsOn', emphasis: 0.5 } ],
    views: {
      laozi: { display: { brightness: 0.5, position: { x: 2, y: 0, z: 0 } } }
    },
    displayPosition: { x: -2, y: 0, z: 0 },
    keyTerms: [
      { id: 'dao', term: '道', pinyin: 'dào' },
      { id: 'qi', term: '氣', pinyin: 'qì' },
      { id: 'jing', term: '精', pinyin: 'jīng' }
    ],
    imageRefs: [ 'assets/images/neiye.jpg' ]
  },
  {
    id: 'laozi',
    name: 'Laozi',
    chineseName: '老子',
    school: 'daoist',
    major: true,
    dates: [ 600, 500 ],
    string: 2,
    relationships: [
      { from: 'confucius', kind: 'opposes', emphasis: 0.5 },
      { to: 'neiye', kind: 'buildsOn', emphasis: 0.5 }
    ],
    views: {
      confucius: {
        display: { brightness: 0.5, position: { x: -2, y: -4, z: 0 } }
      },
      neiye: { display: { brightness: 0.5, position: { x: 2, y: 0, z: 0 } } }
    },
    displayPosition: { x: -2, y: 0, z: 0 },
    keyTerms: [
      { id: 'wuwei', term: '無為', pinyin: 'wúwéi' },
      { id: 'dao', term: '道', pinyin: 'dào' },
      { id: 'de', term: '德', pinyin: 'dé' }
    ],
    imageRefs: [ 'assets/images/laozi.jpg' ]
  },
  {
    id: 'shendao',
    name: 'Shen Dao',
    chineseName: '慎到',
    school: 'legalist',
    major: false,
    dates: [ 350, 275 ],
    string: 7,
    relationships: [ { from: 'laozi', kind: 'buildsOn', strength: 0.8 } ],
    views: {
      laozi: { display: { brightness: 0.5, position: { x: -2, y: 0, z: 0 } } }
    },
    basePosition: { x: 2, y: 0 },
    keyTerms: [],
    imageRefs: [ 'assets/images/shendao.jpg' ]
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    chineseName: '莊子',
    school: 'daoist',
    major: true,
    dates: [ 369, 286 ],
    string: 2,
    relationships: [
      {
        from: 'laozi',
        to: 'confucius',
        kind: 'opposes',
        emphasis: 0.5
      },
      { from: 'gaozi', to: 'mencius', kind: 'opposes', emphasis: 0.5 }
    ],
    views: {
      huizi: { display: { brightness: 1, position: { x: -2, y: -2, z: 0 } } },
      confucius: { display: { brightness: 1, position: { x: 2, y: -2, z: 0 } } },
      laozi: { display: { brightness: 1, position: { x: 0, y: 1.5, z: 0 } } },
      mencius: { display: { brightness: 1, position: { x: 4, y: -4, z: 0 } } },
      gaozi: { display: { brightness: 1, position: { x: -4, y: -4, z: 0 } } }
    },
    displayPosition: { x: 0, y: 4.5, z: 0 },
    keyTerms: [ { id: 'dao', term: '道', pinyin: 'dào' } ],
    imageRefs: [ 'assets/images/zhuangzi_bamboo_slip.jpg' ]
  },
  {
    id: 'xunzi',
    name: 'Xunzi',
    chineseName: '荀子',
    school: 'confucian',
    major: true,
    dates: [ 300, 230 ],
    string: 4,
    relationships: [],
    views: {
      confucius: { display: { brightness: 1, position: { x: 0, y: 0, z: 0 } } },
      mozi: { display: { brightness: 1, position: { x: 0, y: 6, z: 0 } } },
      mencius: {
        display: { brightness: 1, position: { x: 2.78, y: 3.88, z: -3.6 } }
      },
      laozi: {
        display: { brightness: 1, position: { x: -1.4, y: 1.76, z: -5.5 } }
      },
      shendao: {
        display: { brightness: 1, position: { x: -5.5, y: -0.3, z: -2.2 } }
      },
      huizi: {
        display: { brightness: 1, position: { x: -4.7, y: -2.4, z: 2.74 } }
      },
      zhuangzi: {
        display: { brightness: 1, position: { x: -0.4, y: -4.5, z: 3.83 } }
      }
    },
    displayProps: [
      {
        type: 'arrow',
        properties: {
          dir: { x: 0, y: 1, z: 0 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.3, y: 0.88, z: -0.3 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.05, y: 0.76, z: 0.64 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.46, y: 0.64, z: -0.6 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.8, y: 0.52, z: 0.14 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.76, y: 0.41, z: 0.48 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.2, y: 0.29, z: -0.9 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.4, y: 0.17, z: 0.87 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.93, y: 0.05, z: -0.3 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.9, y: -0, z: -0.3 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.41, y: -0.1, z: 0.89 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.28, y: -0.2, z: -0.9 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.7, y: -0.4, z: 0.45 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.82, y: -0.5, z: 0.18 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0.4, y: -0.6, z: -0.6 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0, y: -0.7, z: 0.63 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: 0.35, y: -0.8, z: -0.3 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      },
      {
        type: 'arrow',
        properties: {
          dir: { x: -0, y: -1, z: -0 },
          length: 9,
          color: 'white',
          headLength: 1,
          headWidth: 0.2
        }
      }
    ],
    displayPosition: { x: 2.5, y: 0, z: 0 },
    keyTerms: [
      { id: 'xing_nature', term: '性', pinyin: 'xìng' },
      { id: 'li', term: '禮', pinyin: 'lǐ' }
    ],
    imageRefs: [ 'assets/images/xunzi.jpg' ]
  },
  {
    id: 'lordshang',
    name: 'Lord Shang',
    chineseName: '商鞅',
    school: 'legalist',
    major: true,
    dates: [ 390, 338 ],
    string: 7,
    relationships: [
      {
        targetId: 'confucius',
        kind: 'opposes',
        tone: 'negative',
        strength: 1
      },
      {
        targetId: 'hanfeizi',
        kind: 'influences',
        tone: 'positive',
        strength: 1
      }
    ],
    views: {},
    keyTerms: [
      { id: 'fa', term: '法', pinyin: 'fǎ' },
      { id: 'en', term: '恩', pinyin: 'ēn' }
    ],
    imageRefs: [ 'assets/images/lordshang.jpg' ]
  },
  {
    id: 'shenbuhai',
    name: 'Shen Buhai',
    chineseName: '申不害',
    school: 'legalist',
    major: false,
    dates: [ 400, 337 ],
    string: 7,
    relationships: [],
    views: {},
    keyTerms: [
      { id: 'shu', term: '術', pinyin: 'shù' },
      { id: 'ming', term: '名', pinyin: 'míng' },
      { id: 'xing_form', term: '刑', pinyin: 'xíng' }
    ],
    imageRefs: []
  },
  {
    id: 'hanfeizi',
    name: 'Han Feizi',
    chineseName: '韓非子',
    school: 'legalist',
    major: true,
    dates: [ 280, 233 ],
    string: 7,
    relationships: [
      {
        targetId: 'lordshang',
        kind: 'buildsOn',
        tone: 'neutral',
        strength: 1
      },
      {
        targetId: 'mencius',
        kind: 'rejects',
        tone: 'negative',
        strength: 1
      },
      {
        targetId: 'shendao',
        kind: 'buildsOn',
        tone: 'neutral',
        strength: 0.8
      }
    ],
    views: {},
    keyTerms: [
      { id: 'fa', term: '法', pinyin: 'fǎ' },
      { id: 'shi', term: '勢', pinyin: 'shì' },
      { id: 'shu', term: '術', pinyin: 'shù' }
    ],
    imageRefs: [ 'assets/images/hanfeizi.jpg' ]
  }
]
