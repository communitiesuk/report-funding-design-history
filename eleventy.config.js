module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/



  eleventyConfig.addCollection('find-monitoring-data', collection => {
    return collection.getFilteredByGlob('app/posts/find-monitoring-data/*.md')
  })

  eleventyConfig.addCollection('funding-service-design', collection => {
    return collection.getFilteredByGlob('app/posts/funding-service-design/*.md')
  })


  eleventyConfig.addCollection('submit-monitoring-and-evaluation-data', collection => {
    return collection.getFilteredByGlob('app/posts/submit-monitoring-and-evaluation-data/*.md')
  })



  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      logotype: false,
      productName: 'Report funding progress',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history-template/'
  }
}
