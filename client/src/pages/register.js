import React from 'react'
import { useState,useContext,useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import { StateContext } from '../StateContext';

export default function Register() {
    const [firstName,setfirstname]= useState("");
    const [lastName,setlastname]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [error, setError] = useState("");
    const [context,setContext]= useContext(StateContext);
    const genericErrorMessage = "Something went wrong! Please try again later.";

    const navigate = useNavigate();

    async function handleclick(e) 
    {
        e.preventDefault();
        // setIsSubmitting(true);
        setError("");    
    
        fetch("http://localhost:8081/users/register", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, username: email, password }),
        })
          .then(async (response) => {
            // setIsSubmitting(false);
            if (!response.ok) {
              if (response.status === 400) {
                setError("Please fill all the fields correctly!");
              } else if (response.status === 401) {
                setError("Invalid email and password combination.");
              } else if (response.status === 500) {
                console.log(response);
                const data = await response.json();
                if (data.message) setError(data.message || genericErrorMessage);
              } else {
                setError(genericErrorMessage);
              }
            } else {
              const data = await response.json();
              setContext((oldValues) => {
                return { ...oldValues, token: data.token ,username:email};
              });
            }
          })
          .catch((error) => {
            // setIsSubmitting(false);
            setError(genericErrorMessage);
          });    
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
                        <form  onSubmit={handleclick}>
                            <h2 className='card-title text-center'>Sign Up</h2>
                            <div className="form-group">
                                <label htmlFor="exampleInputName1" className="form-label">First Name</label>
                                <input type="text" className="form-control form-control-sm" id="exampleInputName1" value={firstName} onChange={(e)=>{
                                    setfirstname(e.target.value)
                                }} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputName2" className="form-label">Last Name</label>
                                <input type="text" className="form-control form-control-sm" id="exampleInputName2" value={lastName} onChange={(e)=>{
                                    setlastname(e.target.value)
                                }} required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
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
                                    Do have an account? <a href="/login">Login</a>
                            </div>            
                        </form>

                    </div>        
                
                </div>


            </div>
                    
            
        </div>

    </>
    
    


  )
}
