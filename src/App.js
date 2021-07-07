import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/navbarComp";
import FooterComp from "./components/footerComp";
import LandingComp from "./components/guest/landingComp";
import NewsComp from "./components/news/newsComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavbarComp />
        <Switch>
          <Route path="/" component={LandingComp} exact />
          <Route path="/news" component={NewsComp} />
        </Switch>
        <FooterComp />
      </div>
    );
  }
}

export default App;
