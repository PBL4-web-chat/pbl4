function ChatForm( { addMsg } ){

    const btnPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            addMsg();
        }
    }
 
    return(
        <form name="ChatForm">
            <input type="text" name="ChatContext" placeholder="Nội dung chat..." className="msg-content" id="msg" autoComplete="off" onKeyDown={btnPress}/>
            <div className="context-right">
                <button type="button" id="btn-send" name="btnSend" onClick={addMsg}><i className="fa fa-send"></i></button>
            </div>
            {console.log("chatform rendered")}
        </form>
    )
}

export default ChatForm;