module.exports = {
  title: 'Aspire Frontend',
  description: '简单工作 简单生活',
  // dest: './docs/.vuepress/dist',  // 设置输出目录
  base: '/aspire-docs/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/image/favicon.ico'
    }]
  ],
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/aspire-coding/aspire-docs'
      }
    ],
    sidebar: [{
        title: '基本',
        collapsable: false,
        children: [
          ['/guide/', '介绍'],
          ['/guide/base/standard', '开发规范'],
          ['/guide/base/css', '公有css使用'],
          ['/guide/base/style-guide', '风格指南'],
          ['/guide/base/new-page', '新增页面']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/guide/components/asp-tree-select', 'TreeSelect 下拉树'],
          ['/guide/components/Card', 'Card 卡片'],
          ['/guide/components/Frame', 'Frame 边框'],
          ['/guide/components/query-table', 'QueryTable 搜索表格'],
          ['/guide/components/query-form', 'QueryForm 搜索框'],
          ['/guide/components/dialog', 'Dialog 弹出窗'],
          ['/guide/components/asp-input-upload', 'InputUpload 上传'],
          ['/guide/components/asp-alarm-tag', 'AlarmTag 告警标签']
        ]
      },
      {
        title: '解决方案',
        collapsable: false,
        children: [
          ['/guide/solution/echarts', 'Echarts 使用'],
          ['/guide/solution/iconfont', 'Iconfont 使用'],
          ['/guide/solution/cross-domain', '跨域'],
          ['/guide/solution/babel-polyfill', '兼容IE'],
          ['/guide/solution/optimization-1', '性能优化（一）：大型列表数据']
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
};