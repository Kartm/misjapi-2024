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
  plugins: [{
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
          localFile: {
            requestConcurrency: 5,
          },
        },
      },
      develop: {
        hardCacheMediaFiles: true,
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-theme-ui"]
};

export default config;
