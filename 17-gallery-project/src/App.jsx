import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getDate = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setUserData(response.data);
  };
  
  useEffect(() => {
    getDate();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 font-semibold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Loading...</h3>
  );

  if (userData.length > 0) {
    console.log(printUserData);
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44  rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <div className="text-center font-bold text-lg">{elem.author}</div>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white overflow-auto p-4 h-screen">
      <div className="flex md:h-[92%] flex-wrap gap-4 items-center p-2">
        {printUserData}
      </div>
      <div className="flex justify-center gap-6 items-center ">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 w-40 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (index < 34) {
              setIndex(index + 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 w-40 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
