import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContextProvider";
import { AuthContext } from "../context/AuthenticationContextProvider";
import { UserContext } from "../context/UsersContextProvider";

const ChatInput = () => {
  const [newMessage, setNewMessage] = useState();
  const inputFieldIsEmpty = newMessage?.trim().length > 0;
  const { createMessage } = useContext(ChatContext);
  const { displayName, user } = useContext(AuthContext);
  const { updateUserIsTyping} = useContext(UserContext);

  const sendMessage = (e) => {
    e.preventDefault();
    createMessage(newMessage, displayName);
    setNewMessage("");
  };

  const handleTyping = (e) => {
    const isTyping = e.target.value.trim() !== "";
    setNewMessage(e.target.value);
    updateUserIsTyping(isTyping, user);
  };

  return (
    <div className="relative px-6 py-4 bg-white">
        <form
        onSubmit={sendMessage}
        className="bg-[#f9f8f8] rounded-3xl w-full flex overflow-hidden"
      >
        <input
          type="text"
          placeholder="Type a message"
          className="py-2.5 px-4 outline-none grow bg-[#f9f8f8]"
          value={newMessage}
          onChange={(e) => handleTyping(e)}
        />
        <button
          disabled={!inputFieldIsEmpty}
          className="px-4 font-medium hover:text-black/80"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
