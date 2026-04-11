import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true, //关闭死链构建报错
  
  title: "百合花船·教程",
  description: "授人以渔，只为热爱",
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: false,
      next: false
    },
    
    darkModeSwitchLabel: '浅色模式 / 深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回到顶端',
    
    outline: {
		label: '目录',
	},
    
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },
    
    nav: [
      { text: '主页', link: '/' },
      { text: '从这里开始', link: '/start' },
      { text: '关于我们', link: '/about' }
    ],

    sidebar: [
	  {
        text: '置顶',
        items: [
          { text: '主页', link: '/' },
          { text: '从这里开始', link: '/start' },
          { text: '关于「百合花船·教程」& 如何支持', link: '/about' }
        ]
      },
      {
        text: '海外支付方式 ',
        items: [
          { text: '用于线上国际支付的银行卡推荐及其办理方式', link: '/pay/bank' },
          { text: '工商银行星座卡校园版', link: '/pay/icbc-credit-student' },
          { text: '新 万事达 储蓄卡', link: '/pay/mc-debit' },
          { text: '运通人民币储蓄卡', link: '/pay/amex-debit' },
          { text: 'Visa/旧万事达 外币储蓄卡', link: '/pay/classic-debit' },
          { text: '关于虎穴系网站', link: '/pay/tora' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/643844175' },
      { icon: 'github', link: 'https://github.com/yuriboat/jc' }
    ]
  }
})
