module.exports = {
    title: 'Aspire Ui',
    description: '简单工作 简单生活',
    base: '/vuepress-demo/',
    head:[
        ['link', {rel:'icon', href:'/image/favicon.ico'}]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    // { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/aspire-coding/aspire-docs' }
        ],
        sidebar: {
            '/guide/' :[
                ['/guide/introduction', '介绍'],
                '/guide/query-table'
            ]
        }
    }
};
