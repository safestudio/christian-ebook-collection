module.exports = {
  title: 'Christian Ebook Collection',
  description: '🎉 A collection of Christian e-book',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }]
  ],
  serviceWorker: true,
  base: '/',
  themeConfig: {
    // algolia: {
    //   apiKey: '67346acb58a687206ed3790536caa923',
    //   indexName: 'awesome-nuxt',
    //   algoliaOptions: {
    //     hitsPerPage: 10,
    //   },
    // },
    repo: 'SafeStudio/christian-ebook-collection',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [],
    serviceWorker: {
      updatePopup: true,
    },
    sidebar: [
      {
        title: 'Dưỡng linh',
        collapsable: false,
        children: [
          '/books/duong-linh/binh-an-voi-chua',
        ],
      },
    ]
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    'vuepress-plugin-reading-time',
  ]
};
