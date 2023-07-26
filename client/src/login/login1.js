import React,{ useState,useEffect } from "react";
import {  Link,useNavigate } from "react-router-dom";
import "./login.scss";

const Login1 = () => {

  const [name,setName]= useState("");

  // eslint-disable-next-line
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setUser=(username)=>{
    try {
      localStorage.setItem("userstore", JSON.stringify(username));
      // navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e)
  {
      e.preventDefault();
      setError("");
      setUser(name);
  }

  useEffect(() => {    
    return () => {
      navigate('/');
    }
  }, [])

  return (
    <div className="login1">
      <div className="cardlogin">
        <div className="left">
          <h1>FlatHUB</h1>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="name"
              onChange={(e)=>{setName(e.target.value)}} />
            {error }
            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login1;
