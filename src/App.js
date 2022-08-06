import "./App.css";
import Hamburguesa from "./componentes/hamburguesa";
import Navegador from "./componentes/navegador.jsx";
import React, { useState } from "react";
import MenuItem from "./componentes/menuitem";
import SubMenu from "./componentes/submenu";
import Header from "./componentes/header";

function App() {
  const [estadoVisible, cambiarVisibilidad] = useState(false);
  const [visibilidadJedi, cambiarVisibilidadJedi] = useState(false);
  const hamburguesaClick = () => {
    estadoVisible ? cambiarVisibilidad(false) : cambiarVisibilidad(true);
  };
  const clickJedi = () => {
    visibilidadJedi
      ? cambiarVisibilidadJedi(false)
      : cambiarVisibilidadJedi(true);
  };
  return (

    <div className="App">
    <Header>
      <Hamburguesa manejarClick={hamburguesaClick} visible={estadoVisible} />
      <Navegador visibilidad={estadoVisible}>
        <MenuItem href="#" color="red">
          Sith
        </MenuItem>
        <MenuItem href="#" color="ninguno">
          Home
        </MenuItem>

        <SubMenu
          subMenuTitle="Jedi"
          href={clickJedi}
          color="green"
          visible={visibilidadJedi}
        >
          <MenuItem href="#" color="green">
            Qui Gon Jin
          </MenuItem>
          <MenuItem href="#" color="green">
            Obi Wan Kenobi
          </MenuItem>
        </SubMenu>
        <MenuItem href="#" color="yellow">
          Sentinel
        </MenuItem>
        <MenuItem href="#" color="purple">
          Samuel L. Jackson
        </MenuItem>
      </Navegador>
      </Header>
    </div>
  );
}

export default App;
