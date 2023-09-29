import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { supabase, supabaseKey, supabaseUrl } from "../App";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const newElementRef = useRef(null);



  useEffect(() => {
      if (newElementRef.current) {
        newElementRef.current.scrollIntoView({ behavior: "smooth" });
      }

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
    const { data }: any = await supabase.from("messages").select();
    setMessages(data);
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
            justify={msg.id % 2 === 0 ? "start" : "end"}
          />
        ))}
        <li ref={newElementRef}></li>
      </ul>
    </div>
  );
};

export default ChatBox;
