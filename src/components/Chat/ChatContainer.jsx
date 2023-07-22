import React from 'react'
import MessageList from '../Message/MessageList'
import ChatInput from '../Chat/ChatInput';
import ChatNavbar from '../Chat/ChatNavbar';

const ChatContainer = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <ChatNavbar />
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default ChatContainer