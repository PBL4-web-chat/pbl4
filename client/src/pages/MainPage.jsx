import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import React from "react";


class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msgList: [],
      apiResponse: "fetching",
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/msg")
      .then(res => res.json())
      .then(data => {
        var list = [];
        data.forEach(item => list = [...list, item.text])
        this.setState({
          msgList: list,
          apiResponse: "responsed",
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <NavBar />
        <SideBar />
        <MainContent list={this.state.msgList} />
        <p style={{ position: "absolute", display: "none" }}>{this.state.apiResponse}</p>
      </>
    );
  }
}

export default MainPage;