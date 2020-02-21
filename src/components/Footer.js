import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles({
    box: {
        backgroundColor: "#9da8526e",
        padding: "20px 0px"
    },
    header: {
        paddingBottom: "10px"
    },
    icon: {
        paddingRight: "8px"
    },
    contactBlock: {
        paddingBottom: "8px",
        alignItems: "center"

    },
    copiright: {
        //float: "right"
    }
});

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.box} mt={4}>
            <Container className={classes.container} maxWidth="md">
                <Grid container spacing={3}>

                    {/* <Grid item xs={12} sm={6}>
                        <Typography variant="h5" className={classes.header}>
                            О компании
                        </Typography>
                        <Typography variant="body2" className={classes.text} >
                            Компания основана в Новосибирске очень давно. У нас серьезный бизнес. Мы делаем кровати.
                        </Typography>
                    </Grid> */}

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" className={classes.header}>
                            Контакты
                        </Typography>
                        <Grid container wrap="nowrap" className={classes.contactBlock}>
                            <Grid item className={classes.icon}><LocationOnIcon /></Grid>
                            <Grid item xs>
                                <Typography variant="body2" className={classes.text}>
                                    Новосибирск.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container wrap="nowrap" className={classes.contactBlock}>
                            <Grid item className={classes.icon}><MailOutlineIcon /></Grid>
                            <Grid item xs>
                                <Typography variant="body2" className={classes.text}>
                                    Kurochen@ya.ru
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container wrap="nowrap" className={classes.contactBlock}>
                            <Grid item className={classes.icon}><WhatsAppIcon /></Grid>
                            <Grid item xs>
                                <Typography variant="body2" className={classes.text}>
                                    8-953-790-2244
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                {/* <Box className={classes.copiright}>
                    © {new Date().getFullYear()}, Woodproject
                </Box> */}
            </Container>
        </Box>
    )

}
