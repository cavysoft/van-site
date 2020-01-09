import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Squeak!</h1>
    <p>Welcome to Dini and Yuanyuan's first Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      Always innovating
    </div>
    <ul>
    <li>
        <Link to="/blog">Blog</Link>
    </li>
        <li><Link to="/page-2/">Go to page 2</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
