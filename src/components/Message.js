function Message(props){
    return (
        <div className={props.class}>
            {props.txt}
        </div>
    );
}

export default Message;