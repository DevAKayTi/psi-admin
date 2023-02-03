import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from './store';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>

)