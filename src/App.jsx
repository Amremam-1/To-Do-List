import React, { useState } from "react";
import Task from "./components/Task";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (!taskName || !time) return;

    setLoading(true);

    setTimeout(() => {
      setTaskList([...taskList, { task: taskName, time }]);

      setTaskName("");
      setTime("");
      setLoading(false);
    }, 300);
  };

  const DeleteTask = (index) => {
    const newTaskList = taskList.filter((e, i) => i !== index);

    setTaskList(newTaskList);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1
        className="py-9 text-center 
      text-3xl font-bold text-blue-600"
      >
        To Do List
      </h1>

      <div className="flex flex-col items-center gap-5 px-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="tasxName" className="block text-gray-700 mb-2">
            Task Name:
          </label>
          <input
            id="tasxName"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2
             focus:ring-blue-300"
            placeholder="Enter task name"
          />

          <label htmlFor="time" className="block text-gray-700 mt-4 mb-2">
            Time:
          </label>
          <input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter time (e.g., 2 hours)"
          />
        </div>

        <button
          onClick={addTask}
          disabled={loading}
          className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          {loading ? "Loading..." : "Add Task"}
        </button>
      </div>

      <div className="mt-10 px-5">
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <Task
              key={index}
              task={task.task}
              time={task.time}
              onDelete={() => DeleteTask(index)}
            />
          ))
        ) : (
          <p className="text-2xl text-center text-gray-600 mt-56">
            {" "}
            No Tasks..!{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
