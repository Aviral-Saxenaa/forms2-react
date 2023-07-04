import React, { useState } from "react";

const App = () => {

  const [details,setDetails]=useState({
    name:"",
    email:"",
    password:"",
    address:""
  })

  const handleChange=(e)=>{
    const name=e.target.name;
    const values=e.target.value;
    // console.log(names,values);

    setDetails({
      ...details,
      [name]:values
    })
  }

  const formsubmit=(e)=>{
    e.preventDefault();
    console.log(details);
  }

  return (
    <>
      <form onSubmit={formsubmit}>
        <h3>Name: </h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
        />
        <h3>Email: </h3>
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />
        <h3>Password: </h3>
        <input
          type="password"
          name="password"
          onChange={handleChange}
        />
        <h3>Address: </h3>
        <textarea
          name="address"
          onChange={handleChange}
        />
        <br></br>
        <button type="submit"> Submit form </button>
      </form>
    </>
  );
};

export default App;
