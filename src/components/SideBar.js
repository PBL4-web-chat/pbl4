import { useState } from "react";
import SideBarLI from "./SideBarLI";
import "../cpn_css/SideBar.css";

function SideBar(){
    const [ListItem, setListItem] = useState(["pbl3", "pbl4", "pro"])
 
    return (
        <div className="side-bar">
            <p><b>Chat List</b></p>
            <hr/> <br/>
            {ListItem.map(item => 
                <SideBarLI img="asset/logo.png" name={item} />
            )}
        </div>
    );
}

export default SideBar;