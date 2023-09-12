import React, { useState } from 'react';

type ChatInputProps = {
  onSendMessage: (message: string) => void;  // Callback to handle sending messages
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {  // Only send non-empty messages
      onSendMessage(message);
      setMessage('');  // Clear the input after sending
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>

      {/* Optional: Basic styles for the chat input */}
      <style jsx>{`
        .chatInput {
          margin-top: 20px;
        }
        input {
          width: 80%;
          padding: 10px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ChatInput;
