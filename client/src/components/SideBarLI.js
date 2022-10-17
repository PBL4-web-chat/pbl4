function SideBarLI(props){

    const changeIndex = (event) => {
        props.onClick(props.objKey);
    }

    return (
        <div className="side-bar-li" key={props.objKey} onClick={changeIndex}>
            <img src={props.img} className="li-img vertical-center" alt="" />
            <div className="li-name vertical-center">{props.name}</div>
        </div>
    )
}

export default SideBarLI;