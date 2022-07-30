import "./App.css";
import Hamburguesa from "./componentes/hamburguesa";
import Navegador from "./componentes/navegador.jsx";
import React, { useState } from "react";
import MenuItem from "./componentes/menuitem";

function App() {
  const [estadoVisible, cambiarVisibilidad] = useState(false);
  const hamburguesaClick = () => {
    estadoVisible ? cambiarVisibilidad(false) : cambiarVisibilidad(true);
  };
  return (
    <div className="App">
      <Hamburguesa manejarClick={hamburguesaClick} visible={estadoVisible} />
      <Navegador visibilidad={estadoVisible}>
        <MenuItem href="#" color="red">
          Adrian
        </MenuItem>
        <MenuItem href="#" color="ninguno">
          Home
        </MenuItem>
        <MenuItem href="#" color="green">
          Jedi
        </MenuItem>
        <MenuItem href="#" color="red">
          Sith
        </MenuItem>
        <MenuItem href="#" color="yellow">
          Sentinel
        </MenuItem>
        <MenuItem href="#" color="purple">
          Samuel L. Jackson
        </MenuItem>
      </Navegador>
    </div>
  );
}

export default App;
