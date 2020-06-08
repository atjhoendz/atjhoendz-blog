import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/imgProfile.jpeg/" }) {
        childImageSharp {
          fixed(width: 275, height: 275, quality:100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      className='containerHome'
    >
      <Image 
        fixed={data.avatar.childImageSharp.fixed}
        className="imgProfile"
      />
      <h1 style={{marginBottom:10}}>Mohamad Achun Armando</h1>
      <p>Web Developer | Backend Developer</p>
    </div>
  )
}