import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Misja Pi`,
    siteUrl: `https://www.misjapi.pl`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss',{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://misjapi.pl/graphql",
      schema: {
        requestConcurrency: 5,
        perPage: 10,
        timeout: 3000000,
      },
      type: {
        MediaItem: {
          // exclude: true,
          localFile: {
            requestConcurrency: 5,
          },
        },
        // Comment: {
        //   exclude: true,
        // },
        // Post: {
        //   exclude: true,
        // },
        // User: {
        //   exclude: true,
        // },
      },
      develop: {
        hardCacheMediaFiles: true,
        hardCacheData: true,
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locales`,
    }
  },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`, // name given by the `gatsby-source-filesystem` plugin.
        languages: [`pl`],
        defaultLanguage: `pl`,
        siteUrl: `https://www.misjapi.pl`,
        pages: [
          {
            matchPath: '/index',
            languages: ['pl']
          }
        ]
      }
    }, {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter\:100,300,700`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
  ]
};

export default config;
