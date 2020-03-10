import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
// import {Switch} from 'antd';
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

        <div className="row bodybattery sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">Body Battery</div>
              </div>
              <div className="col-sm-3">
                <div className="toggle">
                  <Toggle name='togglebattery' changeToggle={this.props.changeToggle}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row heartrate sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">Heart Rate</div>
              </div>
              <div className="col-sm-3">
                <div className="toggle">
                  <Toggle name='toggleheartRate' changeToggle={this.props.changeToggle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row steps sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">Steps</div>
              </div>
              <div className="col-sm-3">
                <div className="toggle">
                  <Toggle name='togglesteps' changeToggle={this.props.changeToggle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sleep sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">Sleep</div>
              </div>
              <div className="col-sm-3">
                <div className="toggle">
                  <Toggle name='togglesleep' changeToggle={this.props.changeToggle}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row activitytracker sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">Weekly Steps</div>
              </div>
              <div className="col-sm-3">
                <div className="toggle">
                  <Toggle name='toggleactivity' changeToggle={this.props.changeToggle}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row about sidenavitem">
          <div className="col-sm-8 offset-sm-1">
            <div className="row">
              <div className="col-sm-9">
                <div className="togglename">About</div>
              </div>
              <div className="col-sm-3">
                <div  className="toggle">
                  <Toggle name='toggleabout' changeToggle={this.props.changeToggle}/>
                </div>
              </div>
            </div>
          </div>
        </div>
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
