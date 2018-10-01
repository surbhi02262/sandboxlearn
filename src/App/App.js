import React, { Component } from "react";
import "../Styles/css/main.css";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import HomePage from "./HomePage/HomePage";
import Header from "../App/Components/Header/Header";
class App extends Component {
  render() {
    return (
      <div className="theme">
        <Header />
        <div className="app-components">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
