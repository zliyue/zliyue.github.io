import { defineUserConfig, defaultTheme } from 'vuepress'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '前端开发',
        children: [{
          text:'HTML&CSS',
          link:'/frontEndProgramming/HTML&CSS/01_软件开发-发展路线-软件安装-网页组成.md'
        }]
      }
    ]
  })
})
/*
export  ({
  
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '前端开发',
        children: [{
          text:'HTML&CSS',
          link:'/frontEndProgramming/HTML&CSS/01_软件开发-发展路线-软件安装-网页组成.md'
        }],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
})
*/