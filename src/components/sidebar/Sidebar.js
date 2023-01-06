import React, { useEffect, useState } from "react"; // , { useState }
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "../sidebarChat";
import "./Sidebar.css";
import axios from "../../utils/axios";

export const CHAT_DETAIL = [
  {
    id: 1,
    picture:
      "https://imgs.search.brave.com/7WNXFtlr4-Z2NwQBE4mVYeNjOU1OLFP2AjOnnHcXibI/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/QjZlU0lXcUdMSUx3/c0Q3Rk84SFBBSGFF/OCZwaWQ9QXBp",
    name: "Zain Ahmad",
    lastMessage: "Hi, how are you ?",
  },
  {
    id: 2,
    picture:
      "https://imgs.search.brave.com/8BCRXokxth8-cCPHnq5gTfjoCN2Ke9sLuz4yXyZnbI0/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/dElQZjBuRDZTeHkz/SGNBaFFKbkdBSGFF/OCZwaWQ9QXBp",
    name: "Aitzaz",
    lastMessage: "Hi, what are you doing ?",
  },
  {
    id: 3,
    picture:
      "https://imgs.search.brave.com/BB0ZYMkRpmRs_OiUVeWYK60jD_FxqZO5ycixD-61LO8/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/VnJJMWZlN0JYQlRf/ZE5QZzNCQlhRSGFF/byZwaWQ9QXBp",
    name: "Anas",
    lastMessage: "Hi, Doing well ?",
  },
  {
    id: 4,
    picture:
      "https://imgs.search.brave.com/8DU3CU9_P2SoeOWbPhOnVMQb9LuldswJWFRvxBiy7Y0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/cGNMeXlSQ2VUV29p/aU1OZENUWHhRSGFF/SyZwaWQ9QXBp",
    name: "Waqar",
    lastMessage: "Assalam o alaikum ?",
  },
  {
    id: 5,
    picture:
      "https://imgs.search.brave.com/ZJtCYlSoPOce625SNQCAhugM6KD_oWmVytH14SQTHRw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/Z21tSGhBR0s3UTkz/SWV6TEhoQWhnSGFF/byZwaWQ9QXBp",
    name: "Hammad Nasir Bhai",
    lastMessage: "Alhamdulillah",
  },
  {
    id: 6,
    picture:
      "https://imgs.search.brave.com/uErP7GTd4HjFr5HmXVTWDAVdkcbMLpd1DJbrLJ-4FV0/rs:fit:380:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/TUhrazFDeGs1dG81/NDF1LWFLaHhnSGFK/UCZwaWQ9QXBp",
    name: "Waqas Bhai",
    lastMessage: "Kia hal hai ?",
  },
  {
    id: 7,
    picture:
      "https://imgs.search.brave.com/ZJtCYlSoPOce625SNQCAhugM6KD_oWmVytH14SQTHRw/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/Z21tSGhBR0s3UTkz/SWV6TEhoQWhnSGFF/byZwaWQ9QXBp",
    name: "Rana",
    lastMessage: "Doing well ?",
  },
  {
    id: 8,
    picture:
      "https://imgs.search.brave.com/0XSoy0J8OUsTA46w_xd2rNcKMGZsBMoFR4qxNYSogX4/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/dXZtOHJXUm5kMldv/SUk5TWkxMklBSGFM/RyZwaWQ9QXBp",
    name: "Naweed Bhai",
    lastMessage: "Alhamdulillah ?",
  },
  {
    id: 9,
    picture:
      "https://imgs.search.brave.com/leK7iloAbnxUOEU03MgnOUjnQBoJi6NaDvBSM7N8KAU/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/WE45VzkxNFh6bWt5/dTBhYTFNVEJ3SGFG/aiZwaWQ9QXBp",
    name: "Waqar Bhai",
    lastMessage: "Send your douments ?",
  },
  {
    id: 10,
    picture:
      "https://imgs.search.brave.com/uErP7GTd4HjFr5HmXVTWDAVdkcbMLpd1DJbrLJ-4FV0/rs:fit:380:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/TUhrazFDeGs1dG81/NDF1LWFLaHhnSGFK/UCZwaWQ9QXBp",
    name: "Unknown",
    lastMessage: "Who are you ?",
  },
];
const Sidebar = () => {
  // const [chatDetail, setChatDetail] = useState(CHAT_DETAIL);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [chat_detail, setChat_detail] = useState();
  const [loggedUser, setLoggedUser] = useState();
  const onLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
    axios
      .get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        // console.log("responseINUsers : ", response.data);
        setChat_detail(response.data);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, []);
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div className="profile-icon" title="Logout" onClick={() => onLogout()}>
          <Avatar
            // src={require("../../assets/profile.jpg")}
            src={loggedUser && loggedUser.picture}
          />
        </div>
        <div className="setting-icons">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      <div className="sidebar-search">
        <SearchIcon />
        <input
          type={"text"}
          className="search-input"
          placeholder="Search or Start New Chat"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <div className="contact-list">
        {chat_detail &&
          chat_detail
            .filter(
              (findObj) =>
                findObj.firstName
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase()) ||
                findObj.lastName
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
            )
            .map((obj, index) => {
              return (
                <NavLink
                  // to={"/" + obj.id}
                  // key={index}
                  to={"/chat/" + obj.id}
                  key={index}
                >
                  <SidebarChat key={index} detail={obj} />
                </NavLink>
              );
            })}
      </div>
    </div>
  );
};

export default Sidebar;
