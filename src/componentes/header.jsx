import React from "react";
import logo from "../images/STAR_WARS_LOGO.webp";
import '../css/header.css'
function Header(props) {
  
  // const tamanoVentana = window.innerWidth;
  function ordenElementos() {
    let tamanoVentana =window.innerWidth
    if (tamanoVentana < 992) {
      return (
        <>
          {props.children}
          <div className="final">
            <img src={logo} alt="sw logo" />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <img src={logo} alt="sw logo" />
          </div>
          {props.children}
        </>
      );
    }
  }
  window.addEventListener("resize",()=>window.location.reload())
  return <header>{ordenElementos()}</header>;
}
export default Header;
