import React, { useState } from 'react';
// import { Switch } from 'antd';
import "./Toggle.scss";

const Toggle = ({changeToggle, name}) => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    if (name === 'togglebattery'){
      changeToggle('togglebattery');
    }
    else if (name === 'toggleheartRate'){
      changeToggle('toggleheartRate');
    }
    else if (name === 'togglesteps'){
      changeToggle('togglesteps');
    }
    else if (name === 'togglesleep'){
      changeToggle('togglesleep');
    }
    else if (name === 'toggleactivity'){
      changeToggle('toggleactivity');
    }
    else if (name === 'toggleabout'){
      changeToggle('toggleabout');
    }
    toggle ? setToggle(false): setToggle(true);
  }

  return (
    <div className="toggleswitch" onClick={toggler}>
      <input
        type="checkbox"
        class="mgc-switch"
        defaultChecked={true}
      /> 
    </div>
  );
}
 
export default Toggle;