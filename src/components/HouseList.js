import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    CardActionArea: {
        flexGrow: 1,
    },
    head: {
        textAlign: "center"
    }
}));


export default function HouseList() {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
        query MyQuery {
            allImageSharp(sort: {fields: fixed___originalName}, filter: {fluid: {originalName: {regex: "/^1/"}}}) {
                nodes {
                    fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        allJavascriptFrontmatter(sort: {fields: frontmatter___name}) {
            nodes {
                frontmatter {
                    title
                    path
                }
            }
        }
    }
    `)


    let table = []
    for (let i = 0; i < data.allImageSharp.nodes.length; i++) {
        table.push(data.allImageSharp.nodes[i])
    };
    for (let j = 0; j < data.allJavascriptFrontmatter.nodes.length; j++) {
        table[j].frontmatter = data.allJavascriptFrontmatter.nodes[j].frontmatter
    };

    return (

        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.head}>
                        Примеры работ
                    </Typography>
                </Grid>

                {table.map(card => (

                    <Grid item key={card.frontmatter.name} xs={12} sm={6} md={4}>

                        <Card className={classes.card}>
                            <CardActionArea className={classes.CardActionArea}>
                                <CardMedia>
                                    <Link to={card.frontmatter.path}>
                                        <Img fluid={card.fluid} />
                                    </Link>
                                </CardMedia>
                            </CardActionArea>

                            <CardContent>
                                <Typography variant="h6" >
                                    {card.frontmatter.title}
                                </Typography>
                                {/* <Typography variant="body2" color="textSecondary">
                                        {card.frontmatter.title}
                                    </Typography> */}
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}