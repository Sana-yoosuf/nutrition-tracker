import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    age: "age",
  });

  function handleInput(event) {
    setUserDetails((prevState)=>{
      return{...prevState,[event.target.name]:event.target.value}
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(userDetails)

  }
  return (
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Start Your Fitness</h1>
        <input
          className="inp"
          type="text"
          placeholder="Enter Name"
          name="name"
          required
          onChange={handleInput}
          value={userDetails.name}
        />
        <input
          className="inp"
          type="email"
          required
          placeholder="Enter Email"
          name="email"
          onChange={handleInput}
          value={userDetails.email}
        />
        <input
          className="inp"
          type="password"
          placeholder="Enter Password"
          required maxLength={8}
          name="password"
          onChange={handleInput}
          value={userDetails.password}
        />
        <input
          className="inp"
          type="number"
          placeholder="Enter Age"
          required 
          name="age"
          max={100} min={12}
          onChange={handleInput}
          value={userDetails.age}
        />
        <button className="btn">Join</button>
        <p>
          Already Registered ? <Link to="/login">Login</Link>{" "}
        </p>
      </form>
    </section>
  );
}
