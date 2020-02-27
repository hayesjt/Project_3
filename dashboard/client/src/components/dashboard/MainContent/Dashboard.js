import React, { Component } from "react";
import "./MainContent.scss";
import "./Dashboard.scss";

class Dashboard extends Component {
 
  render() {
    return (
      <div className="main-content">
          {/* Put All content for new Dashboard */}
      </div>
    );
  }
}

// Exporting this component as Dashboard - must use dashboard to require it anywhere else.
export default (Dashboard);
