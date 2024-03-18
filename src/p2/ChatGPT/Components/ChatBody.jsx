import React from 'react';
import "./ChatBody.scss";

const ChatBody = () => {
  return (
    <div className='chat_body'>

      {/* client message */}
      <div className='client_message'>
        <pre>Hi ChatGPT, can you help me?</pre>
      </div>

      {/* AI message */}
      <div className='ai'>
        <pre>Yeah, I can help with you anything.</pre>
      </div>
    </div>
  )
}

export default ChatBody;


