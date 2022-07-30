import React from "react";
import '../css/submenu.css'

function SubMenu (props){
return(
<div className={`subMenu ${(props.visible) ? 'show':''}`}>
{props.children}
</div>

)
}
export default SubMenu;