import React,{useEffect,useContext,useCallback} from 'react'
import { StateContext } from '../StateContext';
import Loader from '../loader';
import './homepage.css'
import Navbar from '../components/nav';
import { Link } from 'react-router-dom';
import Navbar1 from '../components/navbar';
import Footer from '../components/footer';
// import Navbar from './navbar'

export default function Homepage() {

    const [stateContext, setContext] = useContext(StateContext);

    const fetchUserDetails = useCallback(() => {
      fetch("http://localhost:8081/users/me", {
        method: "GET",
        credentials: "include",
        // Pass authentication token as bearer token in header
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${stateContext.token}`,
        },
      }).then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setContext((oldValues) => {
            return { ...oldValues, details: data };
          });
        } else {
          if (response.status === 401) {
            // Edge case: when the token has expired.
            window.location.reload();
          } else {
            setContext((oldValues) => {
              return { ...oldValues, details: null };
            });
          }
        }
      });
    }, [setContext, stateContext.token]);
  
    useEffect(() => {
      // fetch only when user details are not present
      console.log(stateContext.username);
      console.log('fetching..');
      if (!stateContext.details) {
        fetchUserDetails();
      }
    }, [stateContext.details, fetchUserDetails]);



    return stateContext.details === null ? (
        "Error Loading User details"
      ) : !stateContext.details ? (
        < Loader/>
      ) :
       (
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
