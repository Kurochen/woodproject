import React from "react"
import Gallery from './Gallery'
import FirstImg from './FirstImg'
import Layout from "../layout"
import SEO from "../seo"
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Characteristic from "./Characteristic"
import Description from "./Description"
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
    root: {
        // flexGrow: 1,
    },
    img: {
        //border: '1px solid rgba(0,0,0,0.2)',
        //padding: 4,
        //maxWidth: '100px'
    },
    header: {
        textAlign: "center",
        padding: "2rem",
        color: '#634833'
    }
})

function DomLayout(props) {
    const classes = useStyles()

    return (
        <Layout>
            <SEO title={props.frontmatter.title} description={props.frontmatter.description} />
            <Container maxWidth='md'>
                <Grid className={classes.header}>
                    <Typography
                        component="h1"
                        variant='h5'>{props.frontmatter.title}
                    </Typography>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item md={5} sm={5} xs={12}>
                        <FirstImg imgFirst={props.imgFirst} />
                    </Grid>
                    <Grid item md={7} sm={7} xs={12}>
                        <Description frontmatter={props.frontmatter} />
                        <Characteristic frontmatter={props.frontmatter} />

                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Gallery bigImg={props.imgBig} smallImg={props.imgSmall} />
                    </Grid >
                </Grid>
            </Container>
        </Layout>
    )
}


export default DomLayout