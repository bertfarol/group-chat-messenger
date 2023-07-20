import React, { useContext } from "react";
import { AuthContext } from "../context/AuthenticationContextProvider";

const MessageBox = ({ data }) => {
  const { displayName } = useContext(AuthContext);
  const { message, user } = data;

  const sender = displayName === user;

  const messageStyle = sender
    ? "bg-[#191919] text-white"
    : "bg-[#efeaea]";

  const messagePosition = sender ? "self-end" : "";

  return (
    <>
      <div className={`w-fit mt-2 ${messagePosition}`}>
        <div className={`py-2 px-5 rounded-3xl ${messageStyle}`}>{message}</div>
        {!sender && <span className="text-xs pl-2 text-[#a5a4a4]">{user}</span>}
      </div>
    </>
  );
};

export default MessageBox;
