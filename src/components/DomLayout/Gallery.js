import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
    root: {
        // flexGrow: 1,
    },
    img: {
        border: '1px solid rgba(0,0,0,0.2)',
        padding: 4,
        //maxWidth: '100px'
    }
})

function Gallery(props) {
    const classes = useStyles();
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    let arrayImg = [];
    for (let i = 0; i < props.bigImg.length; i++) {
        arrayImg.push(props.bigImg[i].fluid.originalImg)
    };

    return (
        <>
            <Grid container spacing={1} >
                {
                    props.smallImg.map((i, index) => (
                        <Grid item xs='4' sm='3' md='2'>
                            <CardActionArea onClick={() => openLightboxOnSlide(index + 1)}>
                                <CardMedia className={classes.img}>
                                    <Img fluid={i.fluid} />
                                </CardMedia>
                            </CardActionArea>
                        </Grid>
                    ))
                }
            </Grid>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={arrayImg}
                slide={lightboxController.slide}
            />
        </>
    );
}

export default Gallery

