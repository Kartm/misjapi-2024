import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import Layout from "../components/common/Layout";
import HeroSection from "../components/index/HeroSection";
import WhyUsSection from "../components/index/WhyUsSection";
import CoursesSection from "../components/index/CoursesSection";
import TestimonialsSection from "../components/index/TestimonialsSection";
import Navbar from "../components/common/Navbar";

type IndexData = {
    allWpMenuItem: {
        nodes: {
            url: string
            label: string
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

const IndexPage: React.FC<PageProps<IndexData>> = ({data}) => {

    return <Layout>
        <Navbar menuItems={data.allWpMenuItem.nodes}/>
        <HeroSection/>
        <WhyUsSection/>
        <CoursesSection/>
        <TestimonialsSection/>
    </Layout>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
