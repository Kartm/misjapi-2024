import * as React from "react"
import {graphql, HeadFC, PageProps, Script} from "gatsby"
import Layout from "../components/common/Layout";
import Navbar from "../components/common/Navbar";
import GroupClassesSection from "../components/classes/GroupClassesSection";
import {GroupClassesData} from "../models";



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

const GroupClassesPage: React.FC<PageProps<GroupClassesData>> = ({data}) => {
    return <Layout>
        <Script src="https://app.activenow.io/external/signup_form/load_by_js?city_id=&code=5rlIFDCVEy0amNhT&proficiency_id=&school_id=10721&signup_form_id=94514&venue_id=78527&zz="/>
        <Navbar menuItems={data.allWpMenuItem.nodes}/>
        <GroupClassesSection />
    </Layout>
}

export default GroupClassesPage

export const Head: HeadFC = () => <title>Misja Pi | Korepetycje online</title>
