import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from "react-redux";
import MainApp from "./componennts/main";
import bgStyle from "./componennts/bg-js";

const storeApp = ""
    // createStore(reducers);

bgStyle();

render(
    // <Provider store={storeApp}>
        <MainApp/>
    // </Provider>

    ,document.getElementById("root"));

