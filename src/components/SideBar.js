import { useState } from "react";
import SideBarLI from "./SideBarLI";
import "../cpn_css/SideBar.css";

function SideBar(){
    const [ListItem, setListItem] = useState(["pbl3", "pbl4", "new group"]);
 
    return (
        <div className="side-bar">
            <p><b>Chat List</b></p>
            <hr/> <br/>
            <div className="li-container">
                {ListItem.map(item => 
                    <SideBarLI img="asset/logo.png" name={item} />
                )}
            </div>
        </div>
    );
}

export default SideBar;