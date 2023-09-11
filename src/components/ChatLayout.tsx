import TypingBox from "./TypingBox";
import ChatBox from "./ChatBox";

export default function ChatLayout() {
  return (
    <div className="bg-slate-900 h-5/6 w-3/4 rounded-lg flex justify-end flex-col ">
      <div className="w-full p-5 h-full">
        <ChatBox />
      </div>
      <div className="w-full">
        <TypingBox />
      </div>
    </div>
  );
}
