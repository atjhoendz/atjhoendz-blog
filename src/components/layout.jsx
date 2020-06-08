import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const ListLink = props => (
  <li style={{ display:'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          display:'inline'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          display:'inline'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className='layout'>
      <header className="header">
        {header}
        <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/blogs">Blogs</ListLink>
            <ListLink to="/projects">Projects</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} - atjhoendz
      </footer>
    </div>
  )
}

export default Layout
