import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Chat, Sidebar, Login, Register } from "./components";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("access_token"));
  console.log("token : ", token);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="app">
      <div className="chat-body">
        {token && <Sidebar />}
        <Routes>
          <React.Fragment>
            {!token && (
              <React.Fragment>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </React.Fragment>
            )}

            {token && (
              <React.Fragment>
                <Route path={"/chat/:id"} element={<Chat />} />
              </React.Fragment>
            )}
            <Route
              path="**"
              element={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                >
                  <h1> Page Not Found. Please try to use valid URL. </h1>
                </div>
              }
            />
          </React.Fragment>
        </Routes>
      </div>
    </div>
  );
}

export default App;
