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
import Cards from "./Cards/Cards";
import API from '../../utils/API'
import Toggle from './SideNav/Toggle';

class Layout extends Component {
  state = {
    togglebattery: true,
    toggleheartrate: true,
    togglesteps: true,
    togglesleep: true,
    toggleactivity: true,
    toggleabout: true
  }
  handleToggle = (toggleName) => {
    if(toggleName === 'togglebattery'){
      this.setState((prevState) => ({
        togglebattery: !prevState.togglebattery
      }));
    }
    else if(toggleName === 'toggleheartRate'){
      this.setState((prevState) => ({
        toggleheartrate: !prevState.toggleheartrate
      }));
    }
    else if(toggleName === 'togglesteps'){
      this.setState((prevState) => ({
        togglesteps: !prevState.togglesteps
      }));
    }
    else if(toggleName === 'togglesleep'){
      this.setState((prevState) => ({
        togglesleep: !prevState.togglesleep
      }));
    }
    else if(toggleName === 'toggleactivity'){
      this.setState((prevState) => ({
        toggleactivity: !prevState.toggleactivity
      }));
    }
    else if(toggleName === 'toggleabout'){
      this.setState((prevState) => ({
        toggleabout: !prevState.toggleabout
      }));
    }
  }

  constructor(props){
    super(props);
    this.state ={
      dbResult: {},
      togglebattery: true,
      toggleheartrate: true,
      togglesteps: true,
      togglesleep: true,
      toggleactivity: true,
      toggleabout: true
    }
  }

  getDBResult=() =>{
    API.getData().then(res=>{
      console.log(res.data)
      this.setState({dbResult: res.data[0]})
    })
  }

  componentDidMount(){
    this.getDBResult()
  }

  render() {
    console.log(this.state.dbResult)
    return (
      <Router>
        <div className="wrapper">
          <SideNav changeToggle={this.handleToggle}/>
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
            <Cards
              // THESE ARE FOR THE DATABASE
              steps={this.state.dbResult.steps} 
              heartrate={this.state.dbResult.heartrate} 
              sleep={this.state.dbResult.sleep} 
              bodybattery={this.state.dbResult.bodybattery}

              // THESE ARE FOR THE TOGGLE
              togglebattery={this.state.togglebattery}
              toggleheartrate={this.state.toggleheartrate}
              togglesteps={this.state.togglesteps}
              togglesleep={this.state.togglesleep}
              toggleactivity={this.state.toggleactivity}
              toggleabout={this.state.toggleabout}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default (Layout);
