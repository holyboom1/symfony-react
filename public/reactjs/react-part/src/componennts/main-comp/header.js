import React from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";


function Header() {

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
        <Grid container spacing={3} className={'header'} >
            <Grid item xs={4} md={4}>
                <img src="assets/OMG%20-%20GIFT_free-file%20(1).png" width="50%"/>
            </Grid>
            <Grid item xs={8} md={6}>
                2
            </Grid>

        </Grid>
    );
}

export default Header;
