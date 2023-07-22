import React from 'react'
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatContainer = () => {
  return (
    <div className="w-full bg-white">
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default ChatContainer