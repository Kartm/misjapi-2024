import {IGatsbyImageData} from "gatsby-plugin-image";

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

export type GroupClassesData = {
    allWpMenuItem: {
        nodes: {
            url: string
            label: string
        }[]
    },
}