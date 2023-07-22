import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContextProvider";

const MessageItem = ({ data }) => {
  const { displayName } = useContext(AuthContext);
  const { message, user } = data;

  const sender = displayName === user;

  const messageStyle = sender ? "bg-[#0e53e4] text-white" : "bg-[#efeaea]";

  const messagePosition = sender ? "self-end" : "";

  return (
    <>
      <div className={`w-fit mt-2 ${messagePosition}`}>
        {!sender && (
          <span className="text-xs pl-2 text-[#65676B] capitalize select-none">
            {user}
          </span>
        )}
        <div className={`py-2 px-5 rounded-3xl ${messageStyle}`}>{message}</div>
      </div>
    </>
  );
};

export default MessageItem;
