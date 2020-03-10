import React, { Component } from "react";
import "./Cards.scss";
import Ashley from "../../../img/ashley.png";
import Haylee from "../../../img/haylee.png";
import Ka from "../../../img/ka.png";
import Mai from "../../../img/mai.png";

export default class Cards extends Component {
    render() {
        const {component: about, steps, heartrate, sleep, bodybattery} = this.props;
    return (
        <div>
            <div class="jumbotron">
                <div class="row w-100">
                    <div class="col-md-3">
                        {this.props.togglebattery ?                
                            <div class="card card-battery mx-sm-1 p-3">
                                <div class="card card-battery shadow text-battery p-3 small-card"><span class="fa fa-battery-half" aria-hidden="true"></span></div>
                                <div class="text-info text-center mt-3"><h4>Body Battery</h4></div>
                                <div class="text-info text-center mt-2"><h1>{bodybattery}%</h1></div>
                            </div>
                        : null}
                    </div>
                    <div class="col-md-3">
                        {this.props.toggleheartrate ?
                            <div class="card card-heartrate mx-sm-1 p-3">
                                <div class="card card-heartrate shadow text-heartrate p-3 small-card"><span class="fa fa-heart fa-xs" aria-hidden="true"></span></div>
                                <div class="text-success text-center mt-3"><h4>Heart Rate</h4></div>
                                <div class="text-success text-center mt-2"><h1>{heartrate} BPM</h1></div>
                            </div>
                        : null}
                    </div>
                    <div class="col-md-3">
                        {this.props.togglesteps ?
                            <div class="card card-steps mx-sm-1 p-3">
                                <div class="card card-steps shadow text-steps p-3 small-card"><span class="fa fa-male fa-xs" aria-hidden="true"></span></div>
                                <div class="text-danger text-center mt-3"><h4>Steps</h4></div>
                                <div class="text-danger text-center mt-2"><h1>{steps} STEPS</h1></div>
                            </div>
                        : null}
                    </div>
                    <div class="col-md-3">
                        {this.props.togglesleep ?
                            <div class="card card-sleep mx-sm-1 p-3">
                                <div class="card card-sleep shadow text-sleep p-3 small-card"><span class="fa fa-bed fa-xs" aria-hidden="true"></span></div>
                                <div class="text-warning text-center mt-3"><h4>Sleep</h4></div>
                                <div class="text-warning text-center mt-2"><h1>{sleep} HRS</h1></div>
                            </div>
                        : null}
                    </div>
                </div>

                <div class="row w-100 bigcards">
                    <div class="col-md-6">
                        {this.props.toggleactivity ?
                            <div class="card card-activity">
                                <div class="card card-activity shadow text-activity p-3 big-card text-center"><span class="fa fa-grav fa-xs" aria-hidden="true"></span></div>
                                <div class="text-warning text-center mt-3"><h4 className="bigtext">Activity Tracker</h4></div>
                                <div class="text-warning text-center mt-2"><h1>346</h1></div>
                            </div>
                        : null}
                    </div>            
                    <div class="col-md-6">
                        {this.props.toggleabout ?
                            <div class="card card-about">
                                <div class="card card-about shadow text-about p-3 big-card"><span class="fa fa-question fa-7x " aria-hidden="true"></span></div>
                                <div class="text-warning text-center mt-3"><h4 className="bigtext">About</h4></div>
                                <div class="text-dark text-left mt-2">
                                    <p>
                                        At SmartHealth, we want to create a dashboard to go above and beyond the current applications on the market for smartwatches.
                                        Mixing utility and data allows users to not only view what they are doing but also be able to write to-do's, track food intake,
                                        create workouts, and more in one place. Those are some of our future goals but currently, what we have is a dashboard where users
                                        can log in and conveniently see components that they can choose to turn off and on with a simple toggle to personalize their dashboards.
                                    </p>                                        
                                    <b><center>Meet the full-stack developers:</center></b>
                                    <br></br>
                                    <p>
                                        <div className="thumbnail">
                                            <img src={Ashley} className="ashleypic" alt="ashley profile pic" width="100" height="100"/> &nbsp;
                                            <img src={Haylee} className="hayleepic" alt="haylee profile pic" width="100" height="100"/> &nbsp;
                                            <img src={Ka} className="kapic" alt="ka profile pic" width="100" height="100"/> &nbsp;
                                            <img src={Mai} className="maipic" alt="mai profile pic" width="100" height="100"/>
                                        </div>
                                        <br></br>
                                        <div className="contact">            
                                            <b>Ashley Wegwerth</b> &nbsp;
                                                <a class="social-link" href="https://github.com/Ashleyw27" target="_blank">Github &nbsp;</a>
                                                <a class="social-link" href="https://www.linkedin.com/in/ashley-wegwerth/" target="_blank">LinkedIn</a>
                                                <br></br> 
                                            <b>Haylee Thomas-Kuhlmann</b> &nbsp;
                                                <a class="social-link" href="https://github.com/haylee430" target="_blank">Github &nbsp;</a>
                                                <a class="social-link" href="https://www.linkedin.com/in/hayleetk/" target="_blank">LinkedIn</a>
                                                <br></br>
                                            <b>Ka Vang</b> &nbsp;
                                                <a class="social-link" href="https://github.com/ka-vang" target="_blank">Github &nbsp;</a>
                                                <a class="social-link" href="https://www.linkedin.com/in/ka-vang-414203b2/" target="_blank">LinkedIn</a>
                                                <br></br>
                                            <b>Mai Xiong</b> &nbsp;
                                                <a class="social-link" href="https://github.com/maixiong29" target="_blank">Github &nbsp;</a>
                                                <a class="social-link" href="https://www.linkedin.com/in/mai-xiong-44839391/" target="_blank">LinkedIn</a>
                                                <br></br>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
    }
}