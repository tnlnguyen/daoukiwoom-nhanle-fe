import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./app/features/HomePage";
import LoginPage from "./app/features/LoginPage";
import RegisterPage from "./app/features/RegisterPage";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <BrowserRouter>
      <ReactNotification />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
