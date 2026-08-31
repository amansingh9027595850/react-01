import React from "react";

const App = () => {
  const formHandeler =(e)=>{
    e.preventDefault();
    console.log(e)
    console.log('form submitted')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandeler(e)}}>
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
