// /hooks/useSocket.js
import { useEffect } from "react";
import socket from "@/utils/socket-client";

function useCampaignSocket(campaignId, token) {
  useEffect(() => {
    if (campaignId && token) {
      // Join the campaign room when the component mounts
      socket.emit("join campaign", { campaignId, token });

      // Leave the campaign room when the component unmounts
      return () => {
        socket.emit("leave campaign", campaignId);
      };
    }
  }, [campaignId, token]);


  // return functions to interact with the socket here
  // For example:
  const sendMessage = (message) => {
    socket.emit("chat message", { campaignId, message });
  };

  useEffect(() => {
    if (campaignId && token) {
      socket.on("chat message", (message) => {
        console.log("Received message:", message);
      });
  
      return () => {
        socket.off("chat message");
      };
    }
  }, [campaignId, token]);

  return { sendMessage };
}

export default useCampaignSocket;
