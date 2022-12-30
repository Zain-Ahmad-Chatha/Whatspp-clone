import React from "react";
import { Route, Routes } from "react-router-dom";
import { Chat, Sidebar, Login, Register } from "./components";
import "./App.css";

function App() {
  const isLoggedIn = false;
  return (
    <div className="app">
      <div className="chat-body">
        {isLoggedIn && <Sidebar />}
        <Routes>
          <React.Fragment>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={"/path"} element={<Sidebar />} />
            <Route path={"/path/:id"} element={<Chat />} />
          </React.Fragment>
        </Routes>
      </div>
    </div>
  );
}

export default App;
