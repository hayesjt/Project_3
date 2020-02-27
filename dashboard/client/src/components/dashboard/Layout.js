import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import Dashboard from "./MainContent/Dashboard";
import NotFound from "../404/404";
import "./Layout.scss";

class Layout extends Component {


  render() {
    return (
      <Router>
        <div className="wrapper">
          <SideNav />
          <div className="right">
            <TopNav />
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={Dashboard}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default (Layout);
