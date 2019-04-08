module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/vuepress-demo/',
    head:[
        ['link', {rel:'icon', href:'/image/123.ico'}]
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
                ['/guide/hello', 'hello title'],
                '/guide/word'
            ]
        }
    }
};
