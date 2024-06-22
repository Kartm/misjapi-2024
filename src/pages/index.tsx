import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import Layout from "../components/common/Layout";
import HeroSection from "../components/home/HeroSection";
import WhyUsSection from "../components/home/WhyUsSection";
import CoursesSection from "../components/home/CoursesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
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
  query {
    allWpMenuItem {
      nodes {
        url
        label
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
