module.exports = {
  siteMetadata: {
    title: `Woodproject`,
    description: `Проектирование брусовых и бревенчатых домов`,
    author: `@kurochenko`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `catalog`,
        path: `${__dirname}/src/pages/catalog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `woodproject`,
        short_name: `wp`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c0c78f`,
        display: `minimal-ui`,
        icon: `src/images/woodproject-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 24543479,
        webvisor: true,
        trackHash: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
