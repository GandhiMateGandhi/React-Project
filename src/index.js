import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

