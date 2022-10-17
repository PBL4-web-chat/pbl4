import { useEffect, useState } from "react";
import SideBarLI from "./SideBarLI";
import "../cpn_css/SideBar.css";

function SideBar( props ){
    const [ListItem, setListItem] = useState([]);
    const [selectedID, setSelectedID] = useState("");

    const changeIndex = (id) => {
        setSelectedID(id);
        props.changeConvID(id);
    }
    
    useEffect(() => {
        setSelectedID(props.conversation_id);
        fetch('http://localhost:8080/api/conversation/' + localStorage.getItem('accessToken'))
            .then(res => res.json())
            .then(data => setListItem(data.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="side-bar">
            <h1><b>Chat List</b></h1>
            <hr/> <br/>
            <div className="li-container">
                {console.log(ListItem)}
                {
                ListItem.length > 0 ?
                    ListItem.map(item => 
                        <SideBarLI img="asset/logo.png" name={item.name} objKey={item._id} onClick={changeIndex}/>
                    )
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default SideBar;