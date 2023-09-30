import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { supabase, supabaseKey, supabaseUrl } from "../App";
import { useSelector } from "react-redux";
import { selectUsername } from "../features/username/storeUsernameSlice";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const newElementRef = useRef(null);
  const username = useSelector(selectUsername);
  const storedUsername = localStorage.getItem("username");

  useEffect(() => {
    if (newElementRef.current) {
      newElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    getMessages();

    const mySubscription = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();
  }, [messages]);

  async function getMessages() {
    try {
      const { data }: any = await supabase.from("messages").select();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  return (
    <div className="flex flex-col h-full mt-20 overflow-y-auto scrollbar py-8  p-4 border border-none rounded bg-">
      <ul className="p-4 flex flex-col ">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg.text}
            username={msg.username}
            timestamp={msg.timestamp.substring(0, 5)}
            justify={storedUsername === msg.username ? "end" : "start"}
            color={
              storedUsername === msg.username ? "bg-indigo-700" : "bg-slate-700"
            }
          />
        ))}
        <li ref={newElementRef}></li>
      </ul>
    </div>
  );
};

export default ChatBox;
