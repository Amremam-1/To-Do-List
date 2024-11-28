const Task = ({ task, time, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-center sm:flex-row flex-col">
        <div className="w-full">
          <p className="text-lg font-semibold text-gray-800 break-words">
            {task}
          </p>
          <p className="text-sm text-gray-600 mt-2">Time: {time}</p>
        </div>

        <div>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800
            font-medium rounded-lg text-sm px-5 py-2.5 
            dark:hover:bg-red-700"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
