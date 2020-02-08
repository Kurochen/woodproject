import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import HomeIcon from '@material-ui/icons/Home'
import ViewListIcon from '@material-ui/icons/ViewList'
import BuildIcon from '@material-ui/icons/Build'


const useStyles = makeStyles({
    gridBox: {
        paddingTop: '1.5rem',
        textAlign: 'center'
    },
    header: {
        textAlign: 'center',
        color: '#634833'
    },
    icon: {
        color: '#9da852',
        fontSize: '3.5rem',
    }
})

const Composition = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='md'>
            <Grid container spacing={3} className={classes.gridBox}>
                <Grid item xs={12}>
                    <Typography className={classes.header} component="h2" variant='h5'>
                        Что входит
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} className={classes.gridBox}>
                <Grid item sm>
                    <Box>
                        <HomeIcon className={classes.icon} />
                    </Box>
                    <Typography component="h3" variant='body1'>
                        Архитектура
                    </Typography>
                    <p>Планы этажей <br />
                        Фасады<br />
                        Разрезы<br />
                        3D виды<br />
                    </p>
                </Grid>

                <Grid item sm>
                    <Box >
                        <BuildIcon className={classes.icon} />
                    </Box>
                    <Typography component="h3" variant='body1'>
                        Конструктив
                    </Typography>
                    <p>Планы перекрытий <br />
                        Планы стропил<br />
                        Расчеты<br />
                        Модель сруба<br />
                    </p>
                </Grid>

                <Grid item sm>
                    <Box >
                        <ViewListIcon className={classes.icon} />
                    </Box>
                    <Typography component="h3" variant='body1'>
                        Отчеты
                    </Typography>
                    <p>Спецификация бруса <br />
                        Раскрой <br />
                        Общая ведомость применяемых<br />
                        пиломатериалов<br />
                    </p>
                </Grid>

            </Grid>
        </Container >
    )
}


export default Composition