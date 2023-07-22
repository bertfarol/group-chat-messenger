import React, { useContext, useState, useRef, useEffect } from "react";
import { ChatContext } from "../../context/ChatContextProvider";
import { AuthContext } from "../../context/AuthenticationContextProvider";
import { UserContext } from "../../context/UsersContextProvider";

const ChatInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const { createMessage } = useContext(ChatContext);
  const { displayName, user } = useContext(AuthContext);
  const { updateUserIsTyping } = useContext(UserContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.textContent = "Type a message";
  }, []);

  const sendMessage = () => {
    createMessage(newMessage, displayName);
    setNewMessage("");
    updateUserIsTyping(false, user);
  };

  const handleDivInput = (e) => {
    const inputText = e.target.textContent;
    const isTyping = inputText.trim() !== "";
    updateUserIsTyping(isTyping, user);
    setNewMessage(inputText);
  };

  const handleKeyDown = (e) => {
    if (e.which === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (newMessage.trim() !== "") {
        sendMessage();
      }
      inputRef.current.textContent = "";
    }
  };

  const handleInputFocus = () => {
    if (inputRef.current.textContent === "Type a message") {
      inputRef.current.textContent = "";
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current.textContent.trim() === "") {
      inputRef.current.textContent = "Type a message";
    }
  };

  return (
    <div className="relative px-6 py-4 bg-white">
      <div className="bg-[#f9f8f8] rounded-3xl w-full flex overflow-hidden">
        <div
          ref={inputRef}
          contentEditable={true}
          onFocus={handleInputFocus}
          onInput={handleDivInput}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          className={`${newMessage.trim() !== "" ? "text-black" : "text-black/50" } py-2.5 px-4 outline-none grow bg-[#f9f8f8] min-h-[20px] text-[15px]`}
        ></div>
      </div>
    </div>
  );
};

export default ChatInput;
