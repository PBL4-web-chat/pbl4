import { LOCAL_STORAGE_TOKEN_NAME } from "../utils/constants";

function Message(props){
    if(props.msg.user === localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
        return (
            <>
                <div className="msg out-going" key={props.msg._id}>{props.msg.content}</div>
                <div className="out-going dt">{new Date(props.msg.send_time).toUTCString()}</div>
            </>
        )
    else 
        return (
            <>
                <div className="msg" key={props.msg._id}>{props.msg.content}</div>
                <div className="dt">{new Date(props.msg.send_time).toUTCString()}</div>
            </>
        )
}

export default Message;