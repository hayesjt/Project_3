import React from "react";
import "./Cards.scss";

function Cards() {
  return (
  <div>

    <div class="jumbotron">
        <div class="row w-100">
            <div class="col-md-3">
                <div class="card card-about mx-sm-1 p-3">
                    <div class="card card-about shadow text-about p-3 my-card" ><span class="fa fa-question fa-7x" aria-hidden="true"></span></div>
                    <div class="text-info text-center mt-3"><h4>About</h4></div>
                    <div class="text-info text-center mt-2"><h1>234</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-heartrate mx-sm-1 p-3">
                    <div class="card card-heartrate shadow text-heartrate p-3 my-card"><span class="fa fa-heart fa-xs" aria-hidden="true"></span></div>
                    <div class="text-success text-center mt-3"><h4>Heart Rate</h4></div>
                    <div class="text-success text-center mt-2"><h1>9332</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-steps mx-sm-1 p-3">
                    <div class="card card-steps shadow text-steps p-3 my-card" ><span class="fa fa-male fa-xs" aria-hidden="true"></span></div>
                    <div class="text-danger text-center mt-3"><h4>Steps</h4></div>
                    <div class="text-danger text-center mt-2"><h1>346</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-sleep mx-sm-1 p-3">
                    <div class="card card-sleep shadow text-sleep p-3 my-card" ><span class="fa fa-bed fa-xs" aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4>Sleep</h4></div>
                    <div class="text-warning text-center mt-2"><h1>346</h1></div>
                </div>
            </div>
        </div>

        <div class="row w-100 bigcards">
            <div class="col-md-6">
                <div class="card card-activity">
                    <div class="card card-activity shadow text-activity p-3 my-card" ><span class="fa fa-grav fa-xs" aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4>Activity Tracker</h4></div>
                    <div class="text-warning text-center mt-2"><h1>346</h1></div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card card-battery">
                    <div class="card card-battery shadow text-battery p-3 my-card" ><span class="fa fa-battery-half fa-xs" aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4>Body Battery</h4></div>
                    <div class="text-warning text-center mt-2"><h1>346</h1></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cards;