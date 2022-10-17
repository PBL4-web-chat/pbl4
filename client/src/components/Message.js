function Message(props){
    if(props.msg.user === localStorage.getItem('accessToken'))
        return <div className="msg out-going" key={props.msg._id}>{props.msg.content}</div>
    else
        return <div className="msg" key={props.msg._id}>{props.msg.content}</div>
}

export default Message;