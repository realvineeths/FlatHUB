import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import { useNavigate} from "react-router-dom";
import './auth.css'
import { StateContext } from '../StateContext'


export default function Login() {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
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
    <>

    {error && <p>{error}</p>}

    <div className='global-container'>
        <div className='card login-form'>
            <div className='card-body'>
                <div className='card-text'>
                    <form  onSubmit={handleSubmit}>
                        <h2 className='card-title text-center'>Login</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1" className="form-label">Email</label>
                            <input type="email" className="form-control form-control-sm" id="exampleInputName1" value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                            }} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" value={password} onChange={(e)=>{
                                setPassword(e.target.value)}} required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <div className="sign-up">
                                Don't have an account? <a href="/register">Create One</a>
                        </div>
                        <div className="sign-up">
                        Want to login as Admin? <a href="/loginadmin">Click here</a>                                  
                        </div>            
                    </form>

                </div>        
            
            </div>


        </div>
      {/* <ul className="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>                       */}
        
    </div>
    </>    
    
    
    // <>
    // <div class="wrapper">
    //   <div class="container">
    //     <h1>Welcome</h1>
    //     <form class="form">
    //       <input type="text" placeholder="Username">
    //       <input type="password" placeholder="Password">
    //       <button type="submit" id="login-button">Login</button>
    //     </form>
    //   </div>
      
    //   <ul class="bg-bubbles">
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //   </ul>
    // </div>       
    
    // </div>
    // </>
  )
}
