import { Link } from "react-router-dom";


export default function Login() {
    return <section className="container">
      <form className="form">
          <h1>Login to Fitness</h1>
          
          <input className="inp" type="email" placeholder="Enter Email" name="email"/>
          <input className="inp" type="password" placeholder="Enter Password" name="password"/>
          
          <button className="btn">Login</button>
          <p>Dont Have a Account  ? <Link to="/register">Register Now</Link></p>
      </form>
    </section>;
  }
  