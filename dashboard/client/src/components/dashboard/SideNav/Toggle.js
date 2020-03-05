import React, { useState } from 'react';
import { Switch } from 'antd';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
  }

  return (
    <div className="App">
      <Switch onClick={toggler}/>
      {
        toggle ?
        <span><img src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740768.jpg" alt="woman" width="200" height="200" /></span> :
        <span></span>
      }
    </div>
  );
}
 
export default Toggle;