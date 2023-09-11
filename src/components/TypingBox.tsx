import  { useState } from "react";

const TypingBox = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Add code here to handle sending the message
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="flex items-center p-4 bg-slate-900 rounded-b-lg border-t">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none"
      >
        Send
      </button>
    </div>
  );
};

export default TypingBox;
