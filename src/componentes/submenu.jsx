import React from "react";
import MenuItem from "./menuitem";
import '../css/submenu.css'

function SubMenu (props){
return(
<div >
<MenuItem href={props.href} color={props.color} esSubMenu={true}>
{props.subMenuTitle} 
</MenuItem>
<div className={`subMenu ${(props.visible) ? 'show':''}`}>
{props.children}
</div>
</div>
)
}
export default SubMenu;