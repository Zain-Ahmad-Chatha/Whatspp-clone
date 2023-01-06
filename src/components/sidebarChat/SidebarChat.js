import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
// props coming from sidebar.js
const SidebarChat = ({ detail }) => {
  const { lastMessage, picture } = detail;
  return (
    <div className="chat-name">
      <Avatar src={picture} />
      <div>
        <h4>{detail.firstName + " " + detail.lastName}</h4>
        <p> {lastMessage} </p>
      </div>
    </div>
  );
};

export default SidebarChat;
