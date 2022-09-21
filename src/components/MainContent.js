import ContentHeader from "./ContentHeader";
import MessageContainer from "./MessageContainer";
import ChatForm from "./ChatForm";
import "../cpn_css/MainContent.css";
import { useState } from "react";

function MainContent(){
    const [msgList, setMsgList] = useState(["hello", "hi"]); //reactHook

    const addMsg = () => {
        var newMsg = document.ChatForm.ChatContext.value;
        if(newMsg === "") return;
        setMsgList(list => [...list, newMsg]);
        document.ChatForm.ChatContext.value = "";
    }

    return (
        <div className="main-content">
            <ContentHeader />
            <hr/>
            <MessageContainer msgList={msgList}/>
            <hr/>
            <ChatForm addMsg={addMsg}/>
        </div>
    );
}

export default MainContent;