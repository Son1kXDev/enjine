const ENGINES = {
  UNITY: '<i class="fa-brands fa-unity" title="Unity"></i>',
  UNREAL: '<svg id="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Unreal Engine</title><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z" fill="white"></path></svg>'
}

const DEVS = {
  Enjine: {
    logo: '../images/EnjineLogo.svg',
    name: 'Enjine',
    link: 'home'
  },
  DRAGOLITE: {
    logo: '../images/DragoliteLogo.png',
    name: 'DRAGOLITE Studio',
    link: 'https://www.youtube.com/channel/UCR1aZu1OfksYFLQGkwkcNSQ'
  },
  NVW: {
    logo: '../images/NVW.png',
    name: 'NVW Game Development',
    link: 'https://t.me/nvw_game_dev'
  }
}

const STATUS = {
  DEV: {en: 'in development', ru: 'в разработке'},
  ALPHA: {en: 'alpha', ru: 'альфа'},
  BETA: {en: 'beta', ru: 'бета'},
  PRE: {en: 'pre release', ru: 'пре-релиз'},
  RELEASE: {en: 'release', ru: 'релиз'}
}

const games = [
    { title: 'Offroaded',
      name: 'offroaded',
      engine: ENGINES.UNITY,
      developers:[ DEVS.Enjine, DEVS.DRAGOLITE ],
      screenshotsCount: 6,
      releaseDate: '2023',
      status: STATUS.BETA,
      version: '0.1.4 beta',
      preview: '../images/preview/offroaded-preview.png',
      link: '../offroaded',
      downloadLink: [
        {
          link: '../games/offroaded/download/offroaded_v0.1.4beta.apk',
          platform: 'Android'
        },
        {
          link: '../games/offroaded/download/Offroaded Beta 0.1.4.exe',
          platform: 'Windows'
        }
      ]
    },  
    { title: '5opka Game',
      name: 'pyaterka',
      engine: ENGINES.UNITY,
      developers: [ DEVS.Enjine, DEVS.NVW ],
      screenshotsCount: 1,
      releaseDate: '<i class="fa-solid fa-infinity"></i>',
      status: STATUS.DEV,
      version:'',
      preview: '../images/preview/5opka-preview.jpg',
      link: '../pyaterka',
      downloadLink: []
    },
    { title: 'Simulator of a information network specialist',
      name: 'vrsimulator',
      engine: ENGINES.UNITY,
      developers: [ DEVS.Enjine ],
      screenshotsCount: 11,
      releaseDate: '17.06.2023',
      status: STATUS.RELEASE,
      version:'1.0',
      preview: '../images/preview/vrsimulator-preview.jpg',
      link: '../vrsimulator',
      downloadLink: [{
        link: 'https://github.com/Son1kXDev/enjine/releases/download/game/Simulator.Installer.exe',
        platform: 'Windows'
      }]
    }
  ];

  export default games;