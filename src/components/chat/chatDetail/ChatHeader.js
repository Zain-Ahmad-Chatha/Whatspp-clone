import React from "react";
import SidebarChat from "../../sidebarChat";

import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";

import "./ChatDetail.css";

const ChatHeader = ({ detail = {} }) => {
  console.log("chat header values", detail);
  return (
    <div className="chat-header">
      <SidebarChat
        detail={detail}
        // detail={{
        //   id: 1,
        //   name: "Zain Ahmad",
        //   picture:
        //     "https://imgs.search.brave.com/JTlN4hs0gVf0bIhlvenFya4tA-TfL5C8WbgsetNxVM8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/aFBXRmttMVdTRTQ4/c29YS2pXMGhnSGFF/SyZwaWQ9QXBp",
        //   lastMessage: "Last Seen 5:44pm",
        // }}
      />
      <div className="setting-icons">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
