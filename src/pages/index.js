import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome/Welcome"
import Composition from "../components/composition/Composition"
import HouseList from "../components/HouseList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <Composition />
    <HouseList />
  </Layout>
)

export default IndexPage
