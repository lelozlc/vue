module.exports = {
  lang: 'zh-CN',
  title: 'Happy every day',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    // 添加导航栏
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '导航',
        children: [
          {
            text: '导航',
            link: '/guide/'
          },
        ],
      },
      {
        text: '建站',
        link: '/buildMywebsite/',
      },
      // 控制元素何时被激活
      {
        text: 'note',
        children: [
          {
            text: '笔记',
            link: '/note/',
            // 该元素将一直处于激活状态
            activeMatch: '^/note',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      
      '/guide/': [
        {
          text: '导航',
          collapsable: false,
          children: ['/guide/README.md', '/guide/npm常用命令.md'],
        },
      ],
      '/buildMywebsite/': [
        {
          text: '建站思路',
          collapsable: false,
          children: [
            {
              text: '思路',
              link: '/buildMywebsite/readme.md',
            },
            {
              text: 'vuePress',
              children:['/buildMywebsite/vuePress/vuePressIssuse.md','/buildMywebsite/vuePress/markDownIssuse.md']
            },
            {
              text: '前端',
              children:['/buildMywebsite/vueIssues/vueIssues.md','/buildMywebsite/vueIssues/elementUI.md']
            },
          ],
        }
      ],
      '/note/': [
        {
          collapsable: false,
          text: '问题笔记',
          children: ['/note/jvm.md', '/note/readme.md'],
        },
      ],
    },
  }
}
