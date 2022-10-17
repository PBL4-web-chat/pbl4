import Message from "./Message";
import "../cpn_css/MessageContainer.css";
import { useEffect, useState } from "react";

function MessageContainer( props ){

    const [msgList, setMsgList] = useState(props.msglist);

    useEffect(() => {
        setMsgList(props.msglist);
    }, [props.msglist])

    return (
        <div className="message-container">
            {msgList.map(msg => 
                <Message msg={msg} />
            )}
        </div>
    )
}

export default MessageContainer;