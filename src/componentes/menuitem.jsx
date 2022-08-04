import React, { useRef, useEffect, useState } from "react";
import "../css/menuitem.css";
function MenuItem(props) {
  let divInterno = useRef();
  //   const [ancho, setAncho] = useState("300px");
  //   const referencia = divInterno.current;
  let divExterno = useRef();
  //   const igualarAnchos = () => {
  //     setAncho(divInterno.current.offsetWidth.toString() + "px");
  //     divExterno.current.style.width = ancho;
  //     };
  window.addEventListener("resize", cambioDePantalla);
  function cambioDePantalla() {
    try {
      const ventana = window.innerWidth;
      const ancho = divInterno.current.clientWidth || false;

      if (ventana > 992 && ancho !== false) {
        divExterno.current.style.width = ancho + "px";
      } else {
        divExterno.current.style.width = "300px";
      }
    } catch (error) {}
  }

  useEffect(() => cambioDePantalla());
  //   divExterno.current.style.width = "250px";
  //= divInterno.current.offsetWidth;

  //www.iteramos.com/pregunta/90113/como-obtener-el-ancho-de-un-elemento-de-reaccion
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
