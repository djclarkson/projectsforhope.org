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
      resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "G-4L6218X9C8",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      // dataLayerName: "YOUR_DATA_LAYER_NAME",

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      // Defaults to false
      enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
      options: {
        name: `Projects for Hope`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#675454`,
        theme_color: `#675454`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-192x192.png`,
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
