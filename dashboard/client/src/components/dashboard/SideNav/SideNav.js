import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import {Switch} from 'antd';
import Toggle from './Toggle';
import "./Toggle.scss";

import "./SideNav.scss";

class SideNav extends Component {
  onLogoutClick = e => {
    this.props.logoutUser(this.props.history);
    window.location.href = "/";
  };

  // Hide Side Nav
  toggleMenu = e => {
    let sideNav = document.querySelector(".side");
    sideNav.classList.add("invisibile");

    let hamburger = document.querySelector(".hamburger-top-menu");
    hamburger.classList.add("hamburger-visible");

    let rightSide = document.querySelector(".right");
    rightSide.classList.add("no-side");

    let rightSideRight = document.querySelector(".right-top");
    rightSideRight.classList.add("right-top-visibile");
  };

  render() {

    return (
      <nav className="side">
        <ul className="top">
          <li>
            <i
              onClick={this.toggleMenu}
              className="material-icons hamburger-side-menu fa fa-bars"
            >
            </i>
          </li>
        </ul>
        <ul>
          <li className = "about">
            <p className = "togglename">About</p><Toggle className = "toggle"/>
          </li>
          <li className = "heartrate">
          <p className = "togglename">Heart Rate</p><Toggle />
          </li>
          <li className = "steps">
          <p className = "togglename">Steps</p><Toggle />
          </li>
          <li className = "sleep">
          <p className = "togglename">Sleep</p><Toggle />
          </li>
          <li className = "activitytracker">
          <p className = "togglename">Activity Tracker</p><Toggle />
          </li>
          <li className = "bodybattery">
          <p className = "togglename">Body Battery</p><Toggle />
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(SideNav))
);
