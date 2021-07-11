import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/navbarComp";
import FooterComp from "./components/footerComp";
import CryptoComp from "./components/guest/cryptoComp";
import NewsComp from "./components/news/newsComp";
import HomeComp from "./components/guest/homeComp";

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
          <Route path="/" component={HomeComp} exact />
          <Route path="/crypto" component={CryptoComp} />
          <Route path="/news" component={NewsComp} />
        </Switch>
        <FooterComp />
      </div>
    );
  }
}

export default App;
