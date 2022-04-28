require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Projects for Hope`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Projects for Hope`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#675454`,
        theme_color: `#675454`,
        display: `minimal-ui`,
        icon: `src/images/takeshape-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-takeshape`,
      options: {
        apiKey: process.env.TAKESHAPE_TOKEN,
        projectId: process.env.TAKESHAPE_PROJECT,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
