import React from 'react';

// Define the props type
type ChatBoxProps = {
  messages: string[];
};

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="chatBox">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

      {/* Optional: Basic styles for the chat box */}
      <style jsx>{`
        .chatBox {
          max-height: 400px;
          overflow-y: auto;
          border: 1px solid #ccc;
          padding: 10px;
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

export default ChatBox;
