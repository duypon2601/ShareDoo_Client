import React from "react";
import { useParams } from "react-router-dom";
import { Body } from "./Body"; // body là layout bạn viết sẵn

const DUMMY_CONVERSATIONS = {
  1: {
    name: "James Wilson",
    messages: [
      { sender: "James", text: "Sure, the camera is available.", time: "10:00" },
      { sender: "You", text: "Great, thanks!", time: "10:01" },
    ],
  },
  2: {
    name: "Sarah Parker",
    messages: [
      { sender: "Sarah", text: "Is the drone still available?", time: "11:00" },
      { sender: "You", text: "Yes it is!", time: "11:02" },
    ],
  },
};

const ChatDetail = () => {
  const { chatId } = useParams();
  const chatData = DUMMY_CONVERSATIONS[chatId];

  if (!chatData) return <div>Conversation not found.</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>Chat with {chatData.name}</h2>
      <div>
        {chatData.messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <b>{msg.sender}:</b> {msg.text} <i style={{ fontSize: 12 }}>({msg.time})</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDetail;
