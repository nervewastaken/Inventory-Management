// ChatbotEmbed.js
import React, { useEffect } from "react";

const ChatbotEmbed = () => {
  useEffect(() => {
    // Create a script element for injecting Botpress Webchat
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="webchat-container"></div>;
};

export default ChatbotEmbed;
