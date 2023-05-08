const games = [
    {
      title: 'Offroaded',
      engine: '<i class="fa-brands fa-unity"></i>',
      developers: 
      [
        {
          logoSrc: '../images/EnjineLogo.svg',
          name: 'Enjine',
          link: 'home'
        },
        {
          logoSrc: '../images/DragoliteLogo.png',
          name: 'DRAGOLITE Studio',
          link: 'https://www.youtube.com/channel/UCR1aZu1OfksYFLQGkwkcNSQ'
        }
      ],
      description:{
        ru: '../games/offroaded/data/description_ru.txt',
        en: '../games/offroaded/data/description_en.txt',
      },
      screenshots:[
        '../images/preview/offroaded-preview-full.png',
        '../images/games/offroaded/screenshot_1.jpg',
        '../images/games/offroaded/screenshot_5.jpg',
        '../images/games/offroaded/screenshot_6.jpg',
        '../images/games/offroaded/screenshot_7.jpg',
        '../images/games/offroaded/screenshot_8.jpg',
        '../images/games/offroaded/screenshot_9.jpg'
      ],
      releaseDate: '<i class="fa-solid fa-infinity"></i>',
      status: {
        ru: 'БЕТА',
        en: 'BETA'
      },
      version: '0.1.1 beta',
      info: {
        ru: 'Бета доступна для скачивания',
        en: 'Beta is available for download'
      },
      image: '../images/preview/offroaded-preview.png',
      link: {
        ru: '../ru/offroaded',
        en: '../en/offroaded'
      },
      downloadLink: [
        {
          link: '../games/offroaded/download/offroaded_v0.1.1beta.apk',
          platform: 'Android'
        },
        {
          link: '../games/offroaded/download/Offroaded Beta 0.1.1.exe',
          platform: 'Windows'
        }
      ]
    },  
    {
      title: '5opka Game',
      engine: '<i class="fa-brands fa-unity"></i>',
      developers: [],
      description:{},
      screenshots:[],
      releaseDate: '<i class="fa-solid fa-infinity"></i>',
      status: {
        ru: 'в разработке',
        en: 'in development'
      },
      version:'',
      info: {},
      image: '../images/preview/5opka-preview.jpg',
      link: {},
      downloadLink: []
    }
  ];

  // {
  //   title: '',
  //   engine: '',
  //   developers: 
  //   [
  //     {
  //       logoSrc: '',
  //       name: '',
  //       link: ''
  //     }
  //   ],
  //   description:{
  //     ru: '',
  //     en: '',
  //   },
  //   screenshots:[],
  //   releaseDate: '',
  //   status: {
  //     ru: '',
  //     en: ''
  //   },
  //   version: '',
  //   info: {
  //     ru: '',
  //     en: ''
  //   },
  //   image: '',
  //   link: {
  //     ru: '',
  //     en: ''
  //   },
  //   downloadLink: [
  //     {
  //       link: '',
  //       platform: ''
  //     }
  //   ]
  // }

  export default games;