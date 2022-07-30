import React from "react";
import "../css/hamburguesa.css";
const Hamburguesa = (props) => {
  return (
    <div class="contenedorHamburguesa">
      <div  onClick={props.manejarClick} className={`hamburguesa ${(props.visible)? 'active':''}`} >
        <div className="bun top"></div>
        <div className="filling"></div>
        <div className="bun bottom"></div>
      </div>
    </div>
  );
};
export default Hamburguesa