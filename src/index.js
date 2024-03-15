import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from './App.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <GoogleOAuthProvider clientId="301398139156-l34njtshd4eumarc3lc100orep5ig3pt.apps.googleusercontent.com">
            <App/>
        </GoogleOAuthProvider>
    </Router>
);