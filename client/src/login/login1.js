import React,{ useContext, useState,useEffect } from "react";
import {  Link,useNavigate } from "react-router-dom";
import "./login.scss";
import { StateContext } from "../StateContext";

const Login1 = () => {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const genericErrorMessage = "Something went wrong! Please try again later.";
  // eslint-disable-next-line
  const [context,setContext]= useContext(StateContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  async function handleSubmit(e)
  {
        e.preventDefault();
        // setIsSubmitting(true);
        setError("");        
        await fetch('http://localhost:8081/users/login', {
			method: 'POST',
      credentials: "include",			
      headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  username:email,
				password,
			})
		}).then(async (response) => {
            // setIsSubmitting(false);
            if (!response.ok) {
              if (response.status === 400) {
                setError("Please fill all the fields correctly!");
              } else if (response.status === 401) {
                setError("Invalid email and password combination.");
              } else {
                setError(genericErrorMessage);
              }
            } else {
              console.log('its fine..');
              const data = await response.json();
              console.log(data);
              setContext(oldValues=> {
                console.log('hello');
                return { ...oldValues, token: data.token,username:email };
              });      
              console.log('after updating state');
              // console.log(context);

              // navigate('/homepage')

            }
          })
          .catch((error) => {
            // setIsSubmitting(false);
            setError(genericErrorMessage);
          });

        // .then(async(d)=>{
        //     console.log(d);
        //     const data = await d.json();
        //     setContext((oldValues) => {
        //       return { ...oldValues, token: data.token };
        //     });

        //     if(d.status===200)
        //     {
        //         navigate('/homepage')
        //     }
        //     // console.log(d);
        // })
        // .catch((e)=>{
        //     console.log(e);
        // })   
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
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur. */}
          </p>
          <span>Don't you have an account?</span>
          <a href="/register">
            <button>Register</button>
          </a>
          <span>Want to login as Admin?</span>
          <a href="/loginadmin">
            <button>Admin</button>
          </a>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Username"
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}} />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e)=>{
                setPassword(e.target.value)}}
              required/>
            {error }
            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login1;
