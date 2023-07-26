import React,{useEffect,useContext,useCallback} from 'react'
import Loader from '../../loader';
import './homepage.css'
import { Link } from 'react-router-dom';
import Navbar1 from '../../components/navbar';
import Footer from '../../components/footer';
// import Navbar from './navbar'

export default function Homepage() {


      return (
    <>
        {/* <Navbar/> */}
        <Navbar1/>
        <div className="jumbotron">
        <div className="container">  
            <div className="main">
            <h1>29K+ PROPERTIES TO CHOOSE FROM..</h1>
            <a href="#diffview" className="btn-main">Get Started</a>
            
            </div>
        </div>
        </div>

        <div className="supporting" id='diffview'>
        <div className="container two-cont">
            <div className="col">
            {/* <img src='../icons8-home-page-50.png'/> */}
            <i className="fa-solid fa-money-check-dollar"></i>

            <h2>To SELL</h2>
            <p>Make your property look great and interact with right customers.</p>
            <Link to="/sellerview" className="btn-default">Learn More</Link>             

            
            </div>

            <div className="col">
            {/* <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg"/> */}
            <i className="fa-solid fa-house"></i>       
            <h2>To BUY</h2>
            <p>Make your dream come true of getting the right property</p>
            <Link to="/buyerview" className="btn-default">Learn More</Link>             
            </div>


            <div className="col">
            {/* <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg"/> */}
            {/* <i className="fa-solid fa-house"></i>  */}
            {/* <i class="fa-solid fa-chart-mixed"></i>       */}
            {/* <i class="fa-regular fa-chart-mixed"></i> */}
            <i class="fa-sharp fa-solid fa-chart-simple"></i>
            <h2>To PREDICT</h2>
            <p>Get More Knowledge On the Insights Of Property Value</p>
            <Link to="/predict" className="btn-default">Learn More</Link>             
            </div>
        </div>
        <div className="clearfix"></div>
        </div>

        {/* <div className="footer">
        <div className="container">
            <p>&copy; flatHUB 2015</p>
        </div>
        </div>     */}
        <div id='footid'>
          <Footer/>
        </div>
    
    </>
  )
}
