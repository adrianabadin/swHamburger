import React from "react";
import '../css/navegador.css'
const Navegador = ( props) => {
  return (
    <nav className={`menu ${(props.visibilidad) ? 'show':''}` }>
      <ul>
      {props.children}
      </ul>
    </nav>
  );
};
export default Navegador;
