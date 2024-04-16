const ReceiverMessage = ({ message }) => {
  return (
    <div className="message me mb-1 flex text-right">
      <div className="flex-1">
        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 pb-3 text-white">
          <span>{message?.message}</span>
        </div>
        <div className="pr-4 ">
          <small className="text-gray-500 text-xs opacity-80 relative -top-1">
            {message?.created_at}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ReceiverMessage;
