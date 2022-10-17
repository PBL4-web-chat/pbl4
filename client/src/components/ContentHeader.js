import { useEffect } from "react";

function ContentHeader( props ){

    useEffect(() => {
    }, [props.conversation_id])

    return (
        <div className="content-header">
            <img src="asset/logo.png" alt="group" className="profile-img"/>
            <div className="profile-name">
                <b className="group-name">Group's name.</b>
            </div>
        </div>
    )
}

export default ContentHeader;