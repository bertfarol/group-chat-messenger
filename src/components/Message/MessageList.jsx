import React, { useContext, useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import { ChatContext } from "../../context/ChatContextProvider";

const MessageList = () => {
  const { messages } = useContext(ChatContext);
  const messageBoxRef = useRef();

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messageBoxRef}
      id="message-box"
      className="h-[500px] overflow-y-auto grow"
    >
      <div className="flex flex-col justify-end min-h-full px-5 pb-4">
        {messages.map((msg) => (
          <MessageItem data={msg} key={msg.id} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
