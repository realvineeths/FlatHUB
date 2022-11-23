import React,{useContext} from 'react'
import './nav1.scss'
import './nav1'
import { Link } from 'react-router-dom'
import { StateContext } from '../StateContext';


export default function Navbar1() {
    const [stateContext, setContext] = useContext(StateContext);    

    const logoutHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:8081/users/logout", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${stateContext.token}`,
          },
        }).then(async (response) => {
          setContext((oldValues) => {
            return { ...oldValues, details: undefined, token: null };
          });
          window.localStorage.setItem("logout", Date.now());
        });
      }; 

  return (
    <>
        <nav className="navbar">
        <div className="container">

            <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="#">
                <h4>Flat<span>HUB</span></h4>
            </a>
            </div>

            <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
                <li ><Link to='/'>Home</Link></li>
                <li ><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                {/* <li className="navbar-dropdown">
                <a href="#" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                    Categories <i className="fa fa-angle-down"></i>
                </a> */}
                {/* <ul className="dropdown" id="my-dropdown-id">
                    <li><a href="#">Actions</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="separator"></li>
                    <li><a href="#">Seprated link</a></li>
                    <li className="separator"></li>
                    <li><a href="#">One more seprated link.</a></li>
                </ul>
                </li> */}
                {/* <li className="navbar-dropdown">
                <a href="#" className="dropdown-toggler" data-dropdown="blog">
                    Blog <i className="fa fa-angle-down"></i>
                </a> */}
                {/* <ul className="dropdown" id="blog">
                    <li><a href="#">Some category</a></li>
                    <li><a href="#">Some another category</a></li>
                    <li className="separator"></li>
                    <li><a href="#">Seprated link</a></li>
                    <li className="separator"></li>
                    <li><a href="#">One more seprated link.</a></li>
                </ul> */}
                {/* </li> */}
                {/* <li><a href="#">About Us</a></li> */}
                <li><a href="#footid">Contact Us <i className="fa fa-user"></i></a></li>
                {/* <li><a href="#">Contact</a></li> */}
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
            </ul>
            </div>
        </div>
        </nav>        
    </>
  )
}




