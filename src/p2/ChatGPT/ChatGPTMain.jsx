import React from 'react';
import "./ChatGPTMain.scss";
import ChatBody from './Components/ChatBody';
import ChatInput from './Components/ChatInput';

const ChatGPTMain = () => {
  return (
    <div className='main_screen'>

      {/* gradients */}
      <div className="gradient_1"></div>
      <div className="gradient_2"></div>

      {/* header */}
        <div className="header">ChatGPT 2.0</div>

        <div className="body">
          <ChatBody />
        </div>

        <div className="input">
          <ChatInput />
        </div>
    </div>
  )
}

export default ChatGPTMain;



