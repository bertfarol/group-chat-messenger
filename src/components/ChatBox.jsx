import React, { useEffect, useRef, useContext } from "react";
import Navbar from "./Navbar";
import { ChatContext } from "../context/ChatContextProvider";
import MessageBox from "./MessageBox";
import InputBox from "./InputBox";

const ChatBox = () => {
  const { messages } = useContext(ChatContext);
  const messageBoxRef = useRef();

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="lg:shadow-standard max-w-4xl mx-auto lg:rounded-lg lg:mt-14 overflow-hidden">
      <Navbar />
      <div className="bg-white">
        <div
          ref={messageBoxRef}
          id="message-box"
          className="h-[500px] overflow-y-auto"
        >
          <div className="px-5 flex flex-col justify-end pb-4 min-h-full">
            {messages.map((msg) => (
              <MessageBox data={msg} key={msg.id} />
            ))}
          </div>
        </div>
        <InputBox />
      </div>
    </div>
  );
};

export default ChatBox;
