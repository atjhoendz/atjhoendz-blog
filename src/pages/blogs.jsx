import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import SEO from '../components/seo'

export default function Blogs({ data, location }) {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="All Posts" />
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug

                return (
                    <article key={node.fields.slug}>
                        <header>
                            <h3
                                style={{
                                    marginBottom: rhythm(1 / 4)
                                }}
                            >
                                <Link style={{ boxShadow: 'none'}} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p 
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt
                                }}
                            />
                        </section>
                    </article>
                )
            })}
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`