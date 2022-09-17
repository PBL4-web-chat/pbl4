import ContentHeader from "./ContentHeader";
import MessageContainer from "./MessageContainer";
import ChatForm from "./ChatForm";
import "../cpn_css/MainContent.css";

function MainContent(){
    return (
        <div className="main-content">
            <ContentHeader />
            <hr/>
            <MessageContainer />
            <hr/>
            <ChatForm />
        </div>
    );
}

export default MainContent;