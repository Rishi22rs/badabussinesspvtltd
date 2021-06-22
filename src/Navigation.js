import React, { Profiler } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import IBC from "./Pages/IBC";

import whatsapp from "./assets/whatsapp.png";

const Navigation = () => (
  <div>
    <div>
      <p className="whats">Hello, how can we help you?</p>
      <img
        onClick={() =>
          window.open("https://api.whatsapp.com/send?phone=918299093967")
        }
        className="whatsapp"
        width={100}
        height={100}
        src={whatsapp}
        alt="whatsapp"
      />
    </div>
    <Router>
      <Switch>
        <Route path={`/`} exact component={App} />
        <Route path={`/about`} exact component={About} />
        <Route path={`/ibc`} exact component={IBC} />
        <Route path={`/contact`} exact component={Contact} />
      </Switch>
    </Router>
  </div>
);

export default Navigation;
