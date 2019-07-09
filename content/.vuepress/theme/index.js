const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia
      || Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },

  plugins: [
    ['@vuepress/active-header-links', options.activeHeaderLinks],
    '@safestudio/vuepress-plugin-enhanced-search',
    '@vuepress/plugin-nprogress',
    ['container', {
      type: 'bible_address',
      defaultTitle: '',
    }],
    ['container', {
      type: 'bible',
      before: info => `<div class="bible"><p class="title">${info}</p>`,
      after: '</div>',
    }]
  ]
})
