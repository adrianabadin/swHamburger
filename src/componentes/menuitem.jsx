import React from "react";
import '../css/menuitem.css'
function MenuItem(props){
    
    return (
    <li className={props.color}>
        <a href={props.href} >
            {props.children  }
        </a>
    </li>
   ) 
};
export default MenuItem;