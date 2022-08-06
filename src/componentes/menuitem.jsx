import React, { useRef, useEffect } from "react";
import "../css/menuitem.css";
function MenuItem(props) {
  let divInterno = useRef();
  let divExterno = useRef();
  window.addEventListener("resize", cambioDePantalla);
  function cambioDePantalla() {
    try {
      const ventana = window.innerWidth;
      const ancho = divInterno.current.clientWidth || false;

      if (ventana > 992 && ancho !== false) {
        divExterno.current.style.width = ancho + 10+ "px";
      } else {
        divExterno.current.style.width = "300px";
      }
    } catch (error) {}
  }

  useEffect(() => cambioDePantalla());
  return (
    <div className="menuitem-externo" ref={divExterno}>
      <li
        className={`${props.esSubMenu ? "SubMenuItem" : "menuItem"} ${
          props.color
        }`}
        onClick={
          typeof props.href === "function"
            ? props.href
            : () => console.log("nada")
        }
      >
        <div
          className="boton-contenedor"
          ref={divInterno}
          onLoad={cambioDePantalla}
        >
          {/* {useEffect(() => igualarAnchos())} */}
          <button
            href={`${typeof props.href !== "function" ? props.href : "#"}`}
          >
            {" "}
            {props.children}{" "}
          </button>{" "}
        </div>
      </li>
    </div>
  );
}
export default MenuItem;
