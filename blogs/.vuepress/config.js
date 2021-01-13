const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const sideBarConf = require('./config/sideBar')

module.exports = {
  head: [['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ['script', {}, '!(function(w) {\n' +
    '        var script = document.createElement(\'script\')\n' +
    '        script.src = \'http://webmonitorback.paas.x/static/monitorUtils-1.0.0.js\'\n' +
    '        script.async = false\n' +
    '        document.head.appendChild(script)\n' +
    '        w._webmonitorOpts = {host: \'http://webmonitorback.paas.x/\', siteKey: \'5ee35428bd3752463f1a2984\', routerType: \'history\'}\n' +
    '      })(window)']]
  ,
  title: '木叶村',
  description: '心态决定成败',
  dest: 'public',
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  //head: headConf,
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme:["miku"],//看板娘主题
        width:200, //模型宽度
        height:280,//模型高度
        modelStyle:{//自定义模型样式
          right:'90px',
          bottom:'20px'
        }
      }
    ],
    [
        "@vuepress-reco/vuepress-plugin-bgm-player",
        {
            audios:[
                {
                    name: '知否知否应是绿肥红瘦',
                    artist: '胡夏&郁可唯',
                    url: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_65193830&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3',
                    cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
                }
            ],
            position:{
                left: '10px',
                bottom: '10px',
                'z-index': '999999'
            }
        }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    author: 'madman',
    authorAvatar: '/avatar.jpg',
    logo: '/logo.jpg',
    type: 'blog',
    // 搜索设置
    search: true,
    lastUpdated: '上次更新',
    docsDir: 'blogs',
    nav: navConf,
    subSidebar: 'auto',
    sidebar: sideBarConf,
    sidebarDepth: 2,  //2显示三级标题即### 也显示
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    startYear: '2019'
  }
}
