// Gatsby supports TypeScript natively!
import React from "react"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Home from "../components/home"

export default function BlogIndex ({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* <Bio /> */}
      <Home />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`