import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      message:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message:
        "lorem ipsum dolor srem ipsum dolor sit amet lorem ipsum dolor loremlaskdjalkjasldkjasdlkajsdlajdalsdjasldkj slkjasdkjadlkjasdlkajdlkasdlkasla sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
    ,
    {
      message: "loremm ipsum dolor sit amet lorem ipsum dolor sit amet",
      username: "John Doe",
      timestamp: "12:34:56",
    },
  ];

  return (
    <div className="flex flex-col h-full mt-20 overflow-y-auto pt-8  p-4 border border-gray-300 rounded bg-white">
      <div className="p-4 flex flex-col ">
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg.message}
            username={msg.username}
            timestamp={msg.timestamp}
            justify={index % 2 === 0 ? "start" : "end"}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
