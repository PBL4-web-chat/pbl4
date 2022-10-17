import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function MainPage(){

  const [user_id, setuser_id] = useState('');
  const [msgList, setmsgList] = useState([]);
  const [conversation_id, setConversationID] = useState("");
  const [apiResponse, setapiResponse] = useState('');

  const nav = useNavigate();

  const ChangeConvID = (id) => {
    if(id !== conversation_id) 
      setConversationID(id);
  }

  useEffect(() => {
    if(localStorage["accessToken"]) setuser_id(localStorage.getItem('accessToken'));
    else {
      nav('/');
    };
    if(conversation_id !== "") 
      fetch("http://localhost:8080/api/msg/getmsg/" + conversation_id)
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          var msgArray = data.data;
          var list = [];
          msgArray.forEach(item => {
            list = [...list, {
              user: item.user,
              conversation: item.conversation,
              content: item.content,
              attached: item.attached,
              send_time: item.send_time
            }]
          });
          //console.log(list);
          setapiResponse('responsed');
          setmsgList(list);
        })
        .catch(err => console.log(err));
  }, [])

  return (
    <>
      <NavBar />
      <SideBar changeConvID={ChangeConvID}/>
      <MainContent list={msgList} user_id={user_id} conversation_id={conversation_id}/>
      <p style={{ position: "absolute", display: "none" }}>{apiResponse}</p>
    </>
  );
}

export default MainPage;