import React from "react"
import Typography from '@material-ui/core/Typography'

const Description = (props) => {
    return (
        <Typography variant="body">{props.frontmatter.description}</Typography>
    )
}

export default Description