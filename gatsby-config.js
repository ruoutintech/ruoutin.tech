module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Rutgers Out In Tech Website",
    titleTemplate: "RUOIT",
    description: "Uniting LGBTQ+ in Tech @ Rutgers",
    url: "https://ruoutin.tech/", // No trailing slash allowed!
    image: "/images/oit-logo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rutgers Out In Tech Website",
        short_name: "RUOIT",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icons: [
          { src: "src/assets/img/favicon.ico" },
          {
            src: "src/assets/img/maskable_icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
  ],
}
