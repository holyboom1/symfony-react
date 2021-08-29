import {Router} from "react-router";
import {Button, Container, Grid, makeStyles, Paper} from "@material-ui/core";
import React from 'react';
import Header from "./main-comp/header";
import Content from "./main-comp/content";
import Footer from "./main-comp/footer";



export default function MainApp() {

    return <Container maxWidth="md">

        <Header/>
        <Content/>
        <Footer/>

    </Container>

}