module.exports = {
  siteMetadata: {
    title: `GraphCMS Ecommerce Starter`,
    description: `Kick off your next, great Gatsby ecommerce project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@graphcms`,
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
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-euwest.graphcms.com/v1/cjptoohty1pjt01ddlois78gy/master`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMWY5Y2Y1MjctMzM2Yy00ZGYwLWFhZWQtZThkMWU5ZmUwODE0In0.OKxZBml-GUXhcxDEYi-cTVcycNaEDh4aP7oFKN4OQZQ`,
        query: `{
          productListings {
            coverImage {
              id
            }
            bookTitle
            publishedDate
            description
            bookAuthor
          }
        }`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
