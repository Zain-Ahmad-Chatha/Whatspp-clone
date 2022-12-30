import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
// props coming from sidebar.js
const SidebarChat = (props) => {
  const { name, lastMessage, picture } = props.detail;
  return (
    <div className="chat-name">
      <Avatar src={picture} />
      <div>
        <h4>{name}</h4>
        <p> {lastMessage} </p>
      </div>
    </div>
  );
};

export default SidebarChat;
