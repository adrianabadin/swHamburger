import React from "react";
import "../css/hamburguesa.css";
const Hamburguesa = (props) => {
  return (
    <div id="container">
      <div id="burger" onClick={props.manejarClick} className={(props.visible)? 'active':''} >
        <div className="bun top"></div>
        <div className="filling"></div>
        <div className="bun bottom"></div>
      </div>
    </div>
  );
};
export default Hamburguesa