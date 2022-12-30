import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
// import axios from "../../axios";
import axios from "../../utils/axios";
import { ChatBody, ChatHeader } from "./chatDetail";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { IconButton } from "@material-ui/core";
import "./Chat.css";

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
const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [message, setMessage] = useState("");
  const params = useParams();
  useEffect(() => {
    console.log("params ", params);
    axios
      .get("/messages/sync")
      .then((success) => {
        // console.log("message: ", success);
        setMessagesList(success.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  useEffect(() => {
    // Pusher.logToConsole = true;
    const pusher = new Pusher("a79daef9a4dca38b13fe", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      console.log("newMessage : ", newMessage);
      setMessagesList([...messagesList, newMessage]);
      // alert(JSON.stringify(data));
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messagesList]);
  // const growTextArea = (e) => {
  //   e.target.style.height = "inherit";
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  // };
  const sendMessage = (event) => {
    event.preventDefault();
    axios
      .post("/messages/new", {
        name: "Sender",
        message: message,
        received: true,
      })
      .then((success) => {
        setMessage("");
      })
      .catch((err) => {
        console.log("there can be error ", err);
        alert("Some Error Occured.");
      });
  };
  return (
    <div className="chat">
      <ChatHeader detail={CHAT_DETAIL.find((obj) => obj.id == params.id)} />
      <ChatBody messages={messagesList} />
      <div className="send-message-footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form onSubmit={(event) => sendMessage(event)}>
          <input
            type={"text"}
            className="input-message"
            placeholder="Type a Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          {/*
                      <textarea
            type="text"
            placeholder="Message"
            className="input-message"
            onChange={(event) => growTextArea(event)}
          ></textarea>
            */}

          <button className="send-message" type="submit">
            {" "}
            Send{" "}
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
