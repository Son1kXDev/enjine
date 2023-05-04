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
        ru: '<p>Погрузитесь в захватывающие виртуальные поездки по различным картам нашей игры!Выполняйте миссии, улучшайте и настраивайте свой автомобиль, покупайте новые машины и делайте их уникальными, настраивая спойлеры, сплиттеры и подвеску, а также меняя цвет и добавляя наклейки. Не забудьте следить за регулярным обслуживанием своего автомобиля, заправлять его вовремя и чистить от грязи после каждой захватывающей поездки. Разблокируйте множество достижений и продвиньтесь в игре, исследуя разнообразные карты с различными условиями погоды.</p><p>Готовы к новым приключениям? Отправляйтесь в наши виртуальные поездки уже сегодня!</p>',
        en: '<p>Immerse yourself in exciting virtual rides on various maps of our game!Complete missions, upgrade and customize your car, buy new cars and make them unique by adjusting spoilers, splitters and suspension, as well as changing colors and adding stickers. Do not forget to monitor the regular maintenance of your car, refuel it on time and clean it from dirt after each exciting trip. Unlock many achievements and advance in the game by exploring a variety of maps with different weather conditions.</p><p>Are you ready for a new adventure? Embark on our virtual trips today!</p>',
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
      version: '0.1.0 beta',
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
          link: '../games/offroaded/offroaded_v0.1.0beta.apk',
          platform: 'Android'
        },
        {
          link: '../games/offroaded/Offroaded Beta 0.1.0.exe',
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