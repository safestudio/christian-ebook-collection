const siteURL = 'https://cec.safestudio.tech'
module.exports = {
  title: 'Christian Ebook Collection',
  description: '🎉 A collection of Christian e-book',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#006df0'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/icons/ios/ios-appicon-152-152.png'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/ios/ios-appicon-180-180.png',
      color: '#006df0'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/windows10/Square150x150Logo.scale-150.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#fff'
    }]
  ],
  serviceWorker: true,
  base: '/',
  themeConfig: {
    repo: 'SafeStudio/christian-ebook-collection',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: "Books", link: "/books/" }
    ],
    sidebar: 'auto',
  },
  plugins: [
    'vuepress-plugin-nprogress',
    ['sitemap', { hostname: siteURL }],
    ['@vuepress/google-analytics', {
      ga: 'UA-108003633-2'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }],
    '@vuepress/back-to-top',
    'vuepress-plugin-reading-time',
  ]
};
