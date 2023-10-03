import { useEffect, useState } from "react";
import { supabase, supabaseKey, supabaseUrl } from "../App";
import { useSelector } from "react-redux";
import { selectUsername } from "../features/username/storeUsernameSlice";

const TypingBox = () => {
  const [message, setMessage] = useState([]);
  const username = useSelector(selectUsername);
  const storedUsername = localStorage.getItem("username");

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  async function handleSendMessage() {
    if (message.length == 0) {
      console.error("Empty message");
      return;
    }

    try {
      await supabase
        .from("messages")
        .insert([{ text: message, username: storedUsername }])
        .select();

      console.log("Message sent:", message);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center p-4 bg-slate-900 rounded-b-lg border-t z-10">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="flex-1 text-sm sm:text-base px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
      />
      <button
        type="submit"
        onClick={handleSendMessage}
        className="ml-2 px-2 text-sm sm:text-base  sm:px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
      >
        Send
      </button>
    </div>
  );
};

export default TypingBox;
