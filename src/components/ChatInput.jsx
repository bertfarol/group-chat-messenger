import React, {useContext, useState} from "react";
import { ChatContext } from "../context/ChatContextProvider";
import { AuthContext } from "../context/AuthenticationContextProvider";

const ChatInput = () => {
  const [newMessage, setNewMessage] = useState();
  const inputFieldIsEmpty = newMessage?.trim().length > 0;
  const { createMessage } = useContext(ChatContext);
  const { displayName } = useContext(AuthContext);

  const sendMessage = (e) => {
    e.preventDefault();
    createMessage(newMessage, displayName);
    setNewMessage("");
  };
  
  return (
    <div className="relative px-6 py-4 bg-white">
      {inputFieldIsEmpty && (
        <div className="absolute px-6 text-sm left-4 -top-2 text-black/40 animate-pulse">
          Typing...
        </div>
      )}
      <form
        onSubmit={sendMessage}
        className="bg-[#f9f8f8] rounded-3xl w-full flex overflow-hidden"
      >
        <input
          type="text"
          placeholder="Type a message"
          className="py-2.5 px-4 outline-none grow bg-[#f9f8f8]"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
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
