import Message from "./Message";
import "../cpn_css/MessageContainer.css";

function MessageContainer( {msgList} ){
    return (
        <div className="message-container">
            {msgList.map(msg => <Message txt={msg} class="msg"/>)}
        </div>
    )
}

export default MessageContainer;