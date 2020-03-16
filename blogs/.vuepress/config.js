const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
  head: [['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]],
  title: '木叶村',
  description: '想做一只会飞的咸鱼',
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
    ]
  ],
  theme: 'reco',
  themeConfig: {
    author: 'madman',
    authorAvatar: '/avatar.jpg',
    logo: '/logo.jpg',
    type: 'blog',
    lastUpdated: '上次更新',
    docsDir: 'blogs',
    nav: navConf,
    sidebar: 'auto',
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
