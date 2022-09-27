import ContentHeader from "./ContentHeader";
import MessageContainer from "./MessageContainer";
import ChatForm from "./ChatForm";
import "../cpn_css/MainContent.css";
import { useEffect, useState } from "react";

function MainContent( props ){

    const [msgList, setMsgList] = useState(props.list); //reactHook

    useEffect(() => {
        setMsgList(props.list);
    }, [props.list])

    const addMsg = () => {
        console.log(props.list);
        var newMsg = document.ChatForm.ChatContext.value;
        if(newMsg === "") return;
        // fetch('http://localhost:8080/msg/aza', {
        //     body: {
        //         coversation_id: "632d90733b6fdfc947ce5edf",
        //         text: newMsg,
        //         send_time: Date(),
        //     }
        // }).catch(err => console.log(err));
        setMsgList(list => [...list, newMsg]);
        document.ChatForm.ChatContext.value = ""; // lam theo react
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