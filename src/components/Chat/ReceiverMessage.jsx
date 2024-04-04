const ReceiverMessage = ({ message }) => {
  return (
    <div className="message me mb-4 flex text-right">
      <div className="flex-1 px-2">
        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
          <span>{message?.message}</span>
        </div>
        <div className="pr-4">
          <small className="text-gray-500 text-xs opacity-50">{message?.created_at}</small>
        </div>
      </div>
    </div>
  );
};

export default ReceiverMessage;
