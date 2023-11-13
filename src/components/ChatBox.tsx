import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { supabase, supabaseKey, supabaseUrl } from "../App";
import { useSelector } from "react-redux";
import { selectUsername } from "../features/username/storeUsernameSlice";
import { messages_table } from "../App";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const newElementRef = useRef<HTMLLIElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const username = useSelector(selectUsername);
  const storedUsername = localStorage.getItem("username");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (newElementRef.current) {
        newElementRef.current.scrollIntoView();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getMessages();

    const mySubscription = supabase
      .channel(messages_table)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: messages_table },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();
  }, [messages]);

  function scrollToBottom() {
    if (chatBoxRef.current) {
      const isScrolledToBottom =
        chatBoxRef.current.scrollHeight -
          (chatBoxRef.current.scrollTop + chatBoxRef.current.clientHeight) <
        5;
      if (isScrolledToBottom) {
        if (newElementRef.current) {
          newElementRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }

  async function getMessages() {
    try {
      const { data }: any = await supabase.from(messages_table).select();
      setMessages(data);
      scrollToBottom();
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  messages.sort((a, b) => a.id - b.id);

  return (
    <div
      className="flex flex-col h-full mt-10 overflow-y-auto scrollbar  px-4 border border-none rounded"
      ref={chatBoxRef}
    >
      <ul className="p-4 flex flex-col ">
        {messages.map((msg: any) => (
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
