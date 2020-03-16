module.exports = {
  siteMetadata: {
    title: `NodeConf Colombia 2020 | June 26th and 27th, 2020 - Medellín`,
    titleShort: `NodeConf Colombia 2020`,
    description: `NodeConf Colombia 2020 is the first international event focused on the entire Node.js ecosystem.
    It’s a non-profit event, where our attendees will be sharing in an environment of inclusion and respect, having access to relevant information through talks, workshops, and great experiences with the Colombian Node community.`,
    author: `@NodeConfCo`,
    image:
      "https://raw.githubusercontent.com/nodeconf/colombia/d5eaf4bba41a10a7a02f40ff28320207046c18a7/images/social.png",
    url: "https://colombia.nodeconf.com/",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeConfCo 2020`,
        short_name: `NodeConfCo 2020`,
        start_url: `/`,
        background_color: `#2E6B41`,
        theme_color: `#2E6B41`,
        display: `minimal-ui`,
        icon: `src/images/icon-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://nodeconf.us18.list-manage.com/subscribe/post?u=33c93ca7e73c6c27cd0325b9f&amp;id=e71faec96c',
      },
   },
   {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: `${__dirname}/src/images/svg`
      }
    },
   }
  ]
}
