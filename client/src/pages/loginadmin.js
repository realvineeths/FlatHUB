import React,{useState,useNavigate} from 'react'
import {Link} from 'react-router-dom'

function Loginadmin() {

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
        
        // navigate('/sellerview')
    }    



  return (
    <>
   <div className='global-container'>
        <div className='card login-form'>
            <div className='card-body'>
                <div className='card-text'>
                    <form  onSubmit={handleSubmit}>
                        <h2 className='card-title text-center'>ADMIN Login</h2>
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
                        {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                        <Link className="btn btn-primary btn-block" to='/adminview'>Submit</Link>
                        {/* <div className="sign-up">
                                Don't have an account? <a href="/register">Create One</a>
                        </div> */}
                        <div className="sign-up">
                        Want to login as User? <a href="/login">Click here</a>                                  
                        </div>            
                    </form>

                </div>        
            
            </div>


        </div>

    </div>                                
    </>
  )
}

export default Loginadmin