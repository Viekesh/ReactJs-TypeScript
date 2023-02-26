import React from 'react';
import "./ChatInput.scss";
import sendButton from "../Image/msg1255393846-4572.jpg"

const ChatInput = () => {
  return (
    <div className='chat_input'>
      <textarea />

      <img src={sendButton} alt="send button" />
    </div>
  )
}

export default ChatInput;


