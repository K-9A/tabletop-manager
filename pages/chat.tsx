// // pages/index.tsx
// import React, { useState, useEffect } from 'react';
// //import socket from "@/utils/socket-client";
// import ChatBox from "@/components/chat/chat-box";
// import ChatInput from "@/components/chat/chat-input";


// type MessageType = string; // You can expand this later if messages become more complex objects

// const Chat: React.FC = () => {
//   const [messages, setMessages] = useState<MessageType[]>([]);

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('chat message', (message: MessageType) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Cleanup listener on component unmount
//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const handleSendMessage = (message: MessageType) => {
//     console.log("Message sent")
//     socket.emit('chat message', message);
//   };

//   return (
//     <div>
//       <h1>Chat Room</h1>
//       <ChatBox messages={messages} />
//       <ChatInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// };

// export default Chat;
