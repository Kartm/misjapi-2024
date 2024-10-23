import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import Layout from "../components/common/Layout";
import Navbar from "../components/common/Navbar";
import {IGatsbyImageData} from "gatsby-plugin-image";
import TeamSection from "../components/classes/TeamSection";
import {useEffect, useState} from "react";

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
                ordering: number;
                hidden: boolean;
                unavailable: boolean;
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
                hourlyRate: number;
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
    allWpMisjaPiClass(sort: { fields: polaOfertowe___ordering, order: ASC }) {
      nodes {
        polaOfertowe {
          ordering
          hidden
          unavailable
          title
          subtitle
          description
          picture {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 256
                    aspectRatio: 1
                    placeholder: BLURRED
                    transformOptions: { cropFocus: ENTROPY }
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
    const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);

    useEffect(() => {
        const scriptId = 'classes-script';

        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://app.activenow.io/external/signup_form/load_by_js?city_id=&code=5rlIFDCVEy0amNhT&instructor_id=&school_id=10721&signup_form_id=94513&venue_id=78527&zz=';
        document.head.appendChild(script);
    }, [enrollDialogOpen]);

    return <Layout>
        <Navbar menuItems={data.allWpMenuItem.nodes}/>
        <TeamSection teamMembers={data.allWpMisjaPiClass} enrollDialog={{open: enrollDialogOpen, setOpen: setEnrollDialogOpen}} />
    </Layout>
}

export default ClassesPage

export const Head: HeadFC = () => <title>Misja Pi | Korepetycje online</title>
