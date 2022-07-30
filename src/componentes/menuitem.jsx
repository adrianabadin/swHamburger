import React from "react";
import '../css/menuitem.css'
function MenuItem(props){
    
    return (
    <li className={`menuItem ${props.color}`} onClick={(typeof props.href === 'function')? props.href :'{}'}>
        <a href={props.href} >
            {props.children}
        </a>
    </li>
   ) 
};
export default MenuItem;