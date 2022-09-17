function ChatForm(){
    return(
        <form name="ChatForm">
            <input type="text" name="ChatContext" value="" placeholder="Nội dung chat..." className="msg-content" id="msg"/>
            <div className="context-right">
                <button type="button" id="btn-send"><i className="fa fa-send"></i></button>
            </div>
        </form>
    )
}

export default ChatForm;