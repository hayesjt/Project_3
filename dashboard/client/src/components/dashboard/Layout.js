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
  constructor(props){
    super(props);
    this.state ={
      dbResult: {}
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
            <Cards 
            steps={this.state.dbResult.steps} 
            heartrate={this.state.dbResult.heartrate} 
            sleep={this.state.dbResult.sleep} 
            bodybattery={this.state.dbResult.bodybattery}
            />
          </div>
        </div>
      </Router>
    );
  }

}

export default (Layout);
