import React from "react"
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Container maxWidth='md' style={{ paddingTop: 15 }}>
      <SEO title="404: Not found" />
      <Typography component="h1"
        variant='h5'>
        {'Страница не найдена'}
        {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
      </Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
