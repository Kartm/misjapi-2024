import type {GatsbyConfig} from "gatsby";
import path from "path";

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

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
        resolve: "gatsby-plugin-eslint",
        options: {
            fix: true,
            // Gatsby required rules directory
            rulePaths: [gatsbyRequiredRules],
            // Default settings that may be omitted or customized
            stages: ["develop"],
            extensions: ["js", "jsx", "ts", "tsx"],
            exclude: ["node_modules", "bower_components", ".cache", "public"],
            // Any additional eslint-webpack-plugin options below
            // ...
        },
    }, 'gatsby-plugin-postcss', {
        resolve: 'gatsby-source-wordpress',
        options: {
            "url": "https://misjapi.pl/graphql",
            schema: {
                requestConcurrency: 5,
                perPage: 10,
                timeout: 3000000,
            },
            type: {
                Post: {
                    exclude: true,
                },
                PostToTagConnection: {
                    exclude: true,
                },
                CategoryToPostConnection: {
                    exclude: true,
                },
                PostFormatToPostConnection: {
                    exclude: true,
                },
                UserToPostConnection: {
                    exclude: true,
                },
                Tag: {
                    exclude: true,
                },
                TagConnection: {
                    exclude: true,
                },
                PostConnection: {
                    exclude: true,
                },
                MediaItem: {
                    exclude: true,
                },
                Comment: {
                    exclude: true,
                },
                PageToCommentConnection: {
                    exclude: true,
                },
                UserToCommentConnection: {
                    exclude: true,
                },
            },
            develop: {
                hardCacheMediaFiles: true,
                hardCacheData: true,
            },
            catchLinks: false,
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
        }, {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `inter\:100,300,500,700`,
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
