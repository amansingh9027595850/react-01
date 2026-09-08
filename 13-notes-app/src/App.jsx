import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [task, setTask] = useState([]);

  const submitHandeler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, description });
    setTask(copyTask);
    // setTask([...task,{title,description}])
    setTitle("");
    setDescription("");
  };


  const deleteNote = (idx) => {
    const copy = [...task];
  //  console.log(task[idx])
   console.log(copy[idx])
   copy.splice(idx,1)
   setTask(copy)
    }


  return (
    <div className="h-full lg:h-screen bg-black text-white p-10 lg:flex ">
      <form
        className="flex flex-col gap-4 items-start p-10 w-full lg:w-1/2"
        onSubmit={(e) => {
          submitHandeler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none "
        />
        <textarea
          type="text"
          placeholder="Enter Notes Description"
          className="px-5 w-full py-2 h-32 font-medium border-2 rounded outline-none"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="px-5 py-2 bg-blue-500 font-medium text-white rounded hover:bg-blue-600 w-full outline-none">
          Add Note
        </button>
      </form>

      <div className="p-10 lg:w-1/2 lg:border-l-4 border-white h-full">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 items-start justify-start mt-10 h-full overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start h-52 w-40 rounded-2xl py-6 px-4 text-black bg-cover  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]"
              >
                <h3 className="pt-1 leading-tight text-lg font-bold">
                  {elem.title}
                </h3>
                <p className="pb-4 leading-tight font-medium text-sm text-gray-500">
                  {elem.description}
                </p>
                <button onClick={() => {deleteNote(idx)}} className="w-full bg-red-500 active:bg-red-600 active:scale-95 font-bold py-1 text-xs rounded cursor-pointer">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
