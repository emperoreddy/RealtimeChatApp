const Message = ({ message, username, timestamp, justify }) => {
  return (



    <div className={`flex mb-10 justify-${justify}`}>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-l-lg rounded-br-2xl max-w-[29rem]">
        {message}
      </div>
      <div className="flex flex-col ml-2">
        <span className="text-gray-600">{username} </span>
        <span className="text-sm text-gray-600">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
