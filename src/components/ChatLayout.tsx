import TypingBox from "./TypingBox";
import ChatBox from "./ChatBox";

export default function ChatLayout() {
  return (
    <div className="bg-slate-900 h-[90%] w-4/5  rounded-lg flex justify-end flex-col ">
      <div className="w-full p-5 h-full ">
        <ChatBox />
      </div>
      <div className="w-full">
        <TypingBox />
      </div>
    </div>
  );
}
