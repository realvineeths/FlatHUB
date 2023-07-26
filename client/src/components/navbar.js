import React,{useContext} from 'react'
import './nav1.scss'
import './nav1'
import { Link } from 'react-router-dom'
import { StateContext } from '../StateContext';


export default function Navbar1() {
    const logoutHandler=(e)=>{
      e.preventDefault();
      localStorage.removeItem("userstore");
    }

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
                <li><a href="#footid">Contact Us <i className="fa fa-user"></i></a></li>
                <li><a href="/" onClick={logoutHandler}>Logout</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}




