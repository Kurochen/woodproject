import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemSecondaryAction } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'


const Characteristic = (props) => {

    return (
        <Paper>
            <List >
                <ListItem button>
                    <ListItemText primary="Материал" />
                    <ListItemSecondaryAction ><p>{props.frontmatter.material}</p></ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Габариты" />
                    <ListItemSecondaryAction ><p>{props.frontmatter.sice}</p></ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Объем" />
                    <ListItemSecondaryAction ><p>{props.frontmatter.v}</p></ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    )
}

export default Characteristic