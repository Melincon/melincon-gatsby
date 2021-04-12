module.exports = {
  siteMetadata: {
    title: "Melincon",
    author: "Travis John Claus",
    description: "Technology Group",
    tagLine: `© 2021 Melincon, Inc.`,
    menuLinks: [
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Products',
        subMenu: [
          {
            name:'Sites',
            link:'/sites/'
          },
          {
            name:'Software',
            link:'/software/'
          }
        ]
      },
      {
        name:'Blog',
        link:'/blog/'
      },
      {
        name:'Contact',
        link:'/contact/'
      }
    ],
    footerMenu: [
      {
        name:'LinkedIn',
        link:'https://www.linkedin.com/in/travis-claus-42185a187/',
        iconName:'linkedin',
        iconColor:'blue'
      },
      {
        name:'GitHub',
        link:'https://github.com/Melincon',
        iconName:'github',
        iconColor:'grey'
      },
      {
        name:'Instagram',
        link:'https://www.instagram.com/trever_klaus/?hl=en',
        iconName:'instagram',
        iconColor:'brown'
      },
      {
        name:'Twitter',
        link:'https://twitter.com/MelinconLp',
        iconName:'twitter',
        iconColor:'blue'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
};
