import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import Layout from "../components/common/Layout";
import Navbar from "../components/common/Navbar";
import {IGatsbyImageData} from "gatsby-plugin-image";
import TeamSection from "../components/classes/TeamSection";

export type ClassesData = {
    allWpMenuItem: {
        nodes: {
            url: string
            label: string
        }[]
    },
    allWpMisjaPiClass: {
        nodes: {
            polaOfertowe: {
                title: string;
                subtitle: string;
                description: string;
                picture: {
                    node: {
                        localFile: {
                            childImageSharp: {
                                gatsbyImageData: IGatsbyImageData
                            }
                        }
                        mediaItemUrl: string;
                    }
                }
                hourlyRate: number
            }
        }[]
    }
}

export const query = graphql`
  query ($language: String!) {
    allWpMenuItem {
      nodes {
        url
        label
      }
    }
    allWpMisjaPiClass {
      nodes {
        polaOfertowe {
          title
          subtitle
          description
          picture {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 300
                    aspectRatio: 1
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
          hourlyRate
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const ClassesPage: React.FC<PageProps<ClassesData>> = ({data}) => {

    return <Layout>
        <Navbar menuItems={data.allWpMenuItem.nodes}/>
        <TeamSection teamMembers={data.allWpMisjaPiClass}/>
    </Layout>
}

export default ClassesPage

export const Head: HeadFC = () => <title>Misja Pi | Korepetycje online</title>
