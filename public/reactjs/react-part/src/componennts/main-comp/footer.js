import React from 'react';
import {Box, Grid, makeStyles, Paper} from "@material-ui/core";


function Footer() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    return (
        <Box className={'footer'}>
            <Grid item md={4} xs={4}>
                <img src="assets/OMG%20-%20GIFT_free-file%20(1).png" width="25%"/>
            </Grid>
        </Box>

) ;
}

export default Footer;
