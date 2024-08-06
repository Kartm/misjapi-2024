import * as React from "react"
import {graphql, HeadFC, PageProps, Script} from "gatsby"
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
        <div id="fb-root"></div>
        <Script async defer crossOrigin="anonymous"
                src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v20.0" nonce="FLeSA6HI"/>
        <Navbar menuItems={data.allWpMenuItem.nodes}/>
        <HeroSection/>
        <WhyUsSection/>
        <CoursesSection/>
        <TestimonialsSection/>
    </Layout>
}

export default IndexPage

export const Head: HeadFC = () => <title>Misja Pi | Korepetycje online</title>
