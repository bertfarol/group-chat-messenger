import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthenticationContextProvider from "./context/AuthenticationContextProvider";
import ChatContextProvider from "./context/ChatContextProvider";
import UsersContextProvider from "./context/UsersContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <AuthenticationContextProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </AuthenticationContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
