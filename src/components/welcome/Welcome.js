import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ImageLeft from "./ImageLeft"
import ImageRight from "./ImageRight"
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'


const useStyles = makeStyles({
    gridBox: {
        paddingTop: '1.5rem'
    },
    header: {
        textAlign: 'center',
        color: '#634833'
    },
    img: {
        border: '1px solid rgba(0,0,0,0.2)',
        padding: 4
    }
})

const Welcome = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='md'>
            <Grid container spacing={3} className={classes.gridBox}>
                <Grid item xs={12}>
                    <Typography className={classes.header} component="h1" variant='h5'>
                        Проектирование брусовых и бревенчатых домов.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridBox}>
                <Grid item sm xs='12'>
                    <Box className={classes.img}>
                        <ImageLeft />
                    </Box>
                </Grid>
                <Grid item sm>
                    <Typography variant='body2'>
                        <p>Любые архитектурные формы.</p>
                        <p>Подбор оптимального конструктива. Оптимизация расхода материалов. </p>
                        <p>Стомость в среднем 200 руб/м2. Зависит от объема проекта и документации</p>
                    </Typography>
                </Grid>
                <Hidden smDown>
                    <Grid item sm>
                        <Box className={classes.img}>
                            <ImageRight />
                        </Box>
                    </Grid>
                </Hidden>
            </Grid>
        </Container >
    )
}


export default Welcome