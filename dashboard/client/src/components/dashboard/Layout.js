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
    console.log("Did Mount");
    if (localStorage.getItem("fitResponse")) {
      console.log("fitResponse");

      let fitResponse = JSON.parse(localStorage.getItem("fitResponse"));

      var lastEntry = fitResponse.length - 1;

      //let day = fitResponse[lastEntry].dataset[0].point[0] && new Date(fitResponse.dataset[0].point[0].endTimeNanos / 1000000).getDate();


      let startTime = fitResponse[lastEntry].startTimeMillis;
      let endTime = fitResponse[lastEntry].endTimeMillis;

      let fitObj = {};
  

      fitObj.steps = fitResponse[lastEntry].dataset[0].point[0].value[0] ? fitResponse[lastEntry].dataset[0].point[0].value[0].intVal : 0;

      fitObj.sleep = fitResponse[lastEntry].dataset[1].point[0].value[0] ? fitResponse[lastEntry].dataset[1].point[0].value[0].fpVal : 0;

      //let activity = fitResponse[lastEntry].dataset[2].point.length > 0 ? fitResponse[lastEntry].dataset[2].point[0].value[0].fpVal : 0;

      //let distance = fitResponse[lastEntry].dataset[3].point.length > 0 ? fitResponse[lastEntry].dataset[3].point[0].value[0].fpVal : 0;

  
      // fitObj.sleep = 0; //this.state.dbResult ? this.state.dbResult.sleep : 0;
      // fitObj.bodybattery = 0; //this.state.dbResult ? this.state.dbResult.bodybattery : 0;

      console.log(fitObj)
      this.setState({ dbResult: fitObj })

    }
    else {
    this.getDBResult()
  }
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
              steps={this.state.dbResult ? this.state.dbResult.steps : 0}
              heartrate={this.state.dbResult ? this.state.dbResult.heartrate : 0}
              sleep={this.state.dbResult ? this.state.dbResult.sleep : 0}
              bodybattery={this.state.dbResult ? this.state.dbResult.bodybattery : 0}

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
