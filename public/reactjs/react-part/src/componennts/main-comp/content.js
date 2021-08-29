import React from 'react';
import {Box, Grid, makeStyles, Paper} from "@material-ui/core";


function Content() {

    return (
        <Box mt={12} mb={8} lg={9} className={'content'}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    1
                </Grid>
                <Grid item xs={12} md={12}>
                    1
                </Grid>
                <Grid item xs={12} md={12}>
                    1
                </Grid>
            </Grid>
        </Box>
    );
}

export default Content;
