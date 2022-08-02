import React from "react";
import '../css/menuitem.css'
function MenuItem(props){
    
    return (
    <li className={`${(props.esSubMenu)? 'SubMenuItem' : 'menuItem' } ${props.color}`}  onClick={(typeof props.href === 'function')? props.href :()=>console.log("nada")}>
        <a href={`${(typeof props.href !== 'function') ? props.href : '#'}`} >
            {props.children}
        </a>
    </li>
   ) 
};
export default MenuItem;