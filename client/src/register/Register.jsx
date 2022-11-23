import { useState,useContext,useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import { StateContext } from '../StateContext';
import './register.scss'

const Register1 = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   name: "",
  // });
  // const [err, setErr] = useState(null);

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   // try {
  //   //   await axios.post("http://localhost:8800/api/auth/register", inputs);
  //   // } catch (err) {
  //   //   setErr(err.response.data);
  //   // }
  // };

  // console.log(err)

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
    <div className="register">
      <div className="cardregister">
        <div className="left">
          <h1>FlatHUB</h1>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur. */}

          </p>
          <span>Do you have an account?</span>
          <a  href="/login">
            <button>Login</button>
          </a>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleclick}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={firstName}
              onChange={(e)=>{
                setfirstname(e.target.value)
            }} required/>
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={lastName}
              onChange={(e)=>{
                setlastname(e.target.value)
            }} required/>            
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
            }} required/>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e=>{
                setPassword(e.target.value)
              }}
            />
            {error}
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register1;
