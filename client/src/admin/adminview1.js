import React, { useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import { AuthContext } from "../../context/authContext";
import "./admin1.scss";

const Admin1 = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const genericErrorMessage = "Something went wrong! Please try again later.";
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // const navigate = useNavigate();
  
  function handleSubmit(e)
  {
      e.preventDefault();
      
  }  

  return (
    <div className="admining">
      <div className="cardadmin">
        <div className="left">
          <h1>FlatHUB</h1>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur. */}
          </p>
          <span>Are you a user?</span>
          <a href="/">
            <button>Login</button>
          </a>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={email} 
              onChange={(e)=>{
                setEmail(e.target.value)
            }} required />
            <input
              type="password"
              placeholder="Password"
              value={password} onChange={(e)=>{
                setPassword(e.target.value)}} required />
            {error}
            <Link to='/adminview' className="button">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin1;
