function SideBarLI(props){
    return (
        <div className="side-bar-li">
            <img src={props.img} className="li-img vertical-center" />
            <div className="li-name vertical-center">{props.name}</div>
        </div>
    )
}

export default SideBarLI;