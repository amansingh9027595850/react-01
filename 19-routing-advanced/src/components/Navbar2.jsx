import React from "react";
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
      let navigate = useNavigate();
  return (
    <div className="py-2 px-6 bg-cyan-700">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-500 py-2 px-4 m-2 rounded active:scale-95 active:bg-emerald-950 cursor-pointer"
      >
        Retern To Home Page
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-500 py-2 px-4 m-2 rounded active:scale-95 active:bg-emerald-950 cursor-pointer"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="bg-amber-500 py-2 px-4 m-2 rounded active:scale-95 active:bg-emerald-950 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
