import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Induction from "./Views/Induction";
import { AppContainer } from "./styles";
import Lost from "./Views/Lost";
import FirstTimer from "./Views/FirstTimer";
import Main from "./Views/Main";

function ContactsApp(props) {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/induction">
            <Induction />
          </Route>
          <Route path="/first-timer">
              <FirstTimer/>
          </Route>
          <Route path="/main">
              <Main/>
          </Route>
          <Route path="/">
              <Lost/>
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default ContactsApp;
