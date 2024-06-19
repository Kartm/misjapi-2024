import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"

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
  return (
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        {data.allWpMenuItem.nodes.map((post: any) => (
            <div key={post.url}>
              <h2>{post.label}</h2>
              {/*<div dangerouslySetInnerHTML={{ __html: post.content }} />*/}
            </div>
        ))}
      </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
