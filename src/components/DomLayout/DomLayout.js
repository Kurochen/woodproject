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

const useStyles = makeStyles({
    root: {
        // flexGrow: 1,
    },
    img: {
        //border: '1px solid rgba(0,0,0,0.2)',
        //padding: 4,
        maxWidth: '300px'
    },
    header: {
        textAlign: "center",
        padding: 15,
        color: '#634833'
    }
})

function DomLayout(props) {
    const classes = useStyles()


    // return (
    //     <Layout>
    //         <SEO title={props.title} />

    //         <Grid className={classes.header}>
    //             <Typography
    //                 component="h1"
    //                 variant='h5'>{props.title}
    //             </Typography>
    //         </Grid>

    //         <Grid container spacing={3}>
    //             <Grid item md={4} sm={5} xs={12}>
    //                 <FirstImg imgFirst={props.imgFirst} />
    //             </Grid>
    //             <Grid item md={8} sm={7} xs={12}>
    //                 <Gallery bigImg={props.imgBig} smallImg={props.imgSmall} />
    //             </Grid>
    //         </Grid>
    //         <Grid container spacing={3}>
    //             <Grid item md={4} sm={5} xs={12}>
    //                 <Characteristic frontmatter={props.frontmatter} />
    //             </Grid>
    //             <Grid item md={8} sm={7} xs={12}>
    //                 <Description frontmatter={props.frontmatter} />
    //             </Grid>
    //         </Grid>
    //     </Layout>
    // )

    return (
        <Layout>
            <SEO title={props.title} />

            <Grid className={classes.header}>
                <Typography
                    component="h1"
                    variant='h5'>{props.title}
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
        </Layout>
    )
}


export default DomLayout