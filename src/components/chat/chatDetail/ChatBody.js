import React, { useEffect } from "react";
import "./ChatDetail.css";
const ChatBody = ({ messages = [] }) => {
  useEffect(() => {
    const scroll = document.getElementById("test");
    scrollToBottom(scroll);
    // scroll.scrollIntoView();
    // scroll.scrollTop = scroll.scrollHeight;
    // scroll.animate({ scrollTop: scroll.scrollHeight });
  }, [messages]);
  const scrollToBottom = (element) => {
    element.scroll({ top: element.scrollHeight, behavior: "smooth" });
  };
  return (
    <div id="test" className="chat-messages-list">
      {messages &&
        messages.map((obj, index) => {
          return (
            <p
              key={index}
              className={
                !obj.received ? "chat-message" : "chat-message chat-receiver"
              }
            >
              <span className="chat-sender"> {obj.name} </span>
              {obj.message}
              <span className="message-time">
                {" "}
                {new Date().toLocaleTimeString()}
              </span>{" "}
              -{" "}
              <span className="message-date">
                {" "}
                {new Date().toDateString()}{" "}
              </span>
            </p>
          );
        })}
    </div>
  );
};

export default ChatBody;

// <p className="chat-message">
//         <span className="chat-sender">Zain</span>
//         how are you
//         <span className="message-time">
//           {" "}
//           {new Date().toLocaleTimeString()}
//         </span>{" "}
//         / <span className="message-date"> {new Date().toDateString()} </span>
//       </p>

//       <p className="chat-message chat-receiver">
//         <span className="chat-sender">Zain</span>
//         how are you
//         <span className="message-time">
//           {" "}
//           {new Date().toLocaleTimeString()}
//         </span>{" "}
//         / <span className="message-date"> {new Date().toDateString()} </span>
//       </p>
