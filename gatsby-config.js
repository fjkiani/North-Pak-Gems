require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "North Pakistan Handicrafts and Gemstones",
    description:
      "Discover quality handicrafts and gemstones of Northern Pakistan",
    author: "@fjkiani",
    twitterUsername: "@fjkiani",
    image: "/3.jpg",
    siteUrl: "https://northpakgems.netlify.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:`ju09qc5o661w`,
        //  process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:`Q8cotbeUR3MKAtsKkt35ixvaHR2k8F6XC1Knaz0PuVY`,
        // process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gatsby-backroad-project.netlify.com",
        sitemap: "https://gatsby-backroad-project.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}
