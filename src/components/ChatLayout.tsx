import TypingBox from "./TypingBox";
import ChatBox from "./ChatBox";
import SignOutButton from "./ui/Button";

export default function ChatLayout() {
  return (
    <div className="bg-slate-900 border border-indigo-500 h-[95%] sm:h-[90%] w-[95%] sm:w-4/5 shadow-purple-900 rounded-lg shadow-lg flex justify-end flex-col ">
      <div className="place-self-end m-2">
        <SignOutButton></SignOutButton>
      </div>
      <div className="w-full sm:p-5 h-[95%] my-auto">
        <ChatBox />
      </div>
      <div className="w-full z-10">
        <TypingBox />
      </div>
    </div>
  );
}
