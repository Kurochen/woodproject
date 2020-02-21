import React from "react"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
        // flexGrow: 1,
    },
    img: {
        //border: '1px solid rgba(0,0,0,0.2)',
        //padding: 4,
        //maxWidth: '400px'
    }
})

const FirstImg = (props) => {
    const classes = useStyles()

    return (
        <Paper>
            <Img fluid={props.imgFirst.fluid} className={classes.img} />
        </Paper>
    )
}

export default FirstImg