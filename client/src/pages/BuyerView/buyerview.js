import  React, {Component, useEffect,useState,useContext} from 'react'
import './cardisp1.scss'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Navbar1 from '../../components/navbar';
import Footer from '../../components/footer';

function Buyerview() {

    const cities=['Bangalore', 'Mysore', 'Ghaziabad', 'Kolkata', 'Kochi', 'Jaipur',
    'Mohali', 'Chennai', 'Siliguri', 'Noida', 'Raigad', 'Bhubaneswar',
    'Wardha', 'Pune', 'Mumbai', 'Nagpur', 'Deoghar', 'Bhiwadi',
    'Faridabad', 'Lalitpur', 'Maharashtra', 'Vadodara',
    'Visakhapatnam', 'Vapi', 'Mangalore', 'Aurangabad', 'Ottapalam',
    'Vijayawada', 'Belgaum', 'Bhopal', 'Lucknow', 'Kanpur',
    'Gandhinagar', 'Pondicherry', 'Agra', 'Ranchi', 'Gurgaon', 'Udupi',
    'Indore', 'Jodhpur', 'Coimbatore', 'Valsad', 'Palghar', 'Surat',
    'Varanasi', 'Guwahati', 'Amravati', 'Anand', 'Tirupati',
    'Secunderabad', 'Raipur', 'Vizianagaram', 'Thrissur', 'Satna',
    'Madurai', 'Chandigarh', 'Shimla', 'Gwalior', 'Rajkot', 'Sonipat',
    'Allahabad', 'Berhampur', 'Roorkee', 'Dharuhera', 'Latur',
    'Durgapur', 'Panchkula', 'Solapur', 'Durg', 'Goa', 'Jamshedpur',
    'Hazaribagh', 'Jabalpur', 'Hosur', 'Morbi', 'Hubli', 'Karnal',
    'Patna', 'Bilaspur', 'Ratnagiri', 'Meerut', 'Kotdwara',
    'Jalandhar', 'Amritsar', 'Patiala', 'Ludhiana', 'Alwar', 'Kota',
    'Panaji', 'Kolhapur', 'Ernakulam', 'Bhavnagar', 'Bharuch',
    'Asansol', 'Jhansi', 'Margao', 'Anantapur', 'Eluru', 'Bhilai',
    'Dehradun', 'Guntur', 'Jalgaon', 'Udaipur', 'Gurdaspur',
    'Neemrana', 'Hassan', 'Sindhudurg', 'Hoshangabad', 'Kottayam',
    'Dhanbad', 'Navsari', 'Bahadurgarh', 'Nellore', 'Dhule',
    'Tirunelveli', 'Cuttack', 'Haridwar', 'Nainital', 'Jamnagar',
    'Kanchipuram', 'Kadi', 'Karad', 'Jagdalpur', 'Panipat',
    'Muzaffarpur', 'Salem', 'Jhunjhunu', 'Gandhidham', 'Junagadh',
    'Moradabad', 'Ahmednagar', 'Jalna', 'Bhiwani', 'Palakkad',
    'Kannur', 'Karjat', 'Akola', 'Jind', 'Gaya', 'Ambala', 'Ajmer',
    'Hajipur', 'Dharwad', 'Pudukkottai', 'Kollam', 'Ooty', 'Bhandara',
    'Barabanki', 'Rajpura', 'Palwal', 'Aligarh', 'Erode', 'Rudrapur',
    'Tenali', 'Ongole', 'Nizamabad', 'Puri', 'Dalhousie', 'Siddipet',
    'Solan', 'Darbhanga', 'Kadapa', 'Kakinada', 'Agartala', 'Warangal',
    'Haldwani', 'Osmanabad', 'Bhagalpur', 'Bardhaman', 'Rishikesh',
    'Chandrapur', 'Bokaro', 'Jharsuguda', 'Bhimavaram', 'Kurnool',
    'Amroha', 'Hapur', 'Sabarkantha', 'Harda', 'Ujjain', 'Thoothukudi',
    'Karaikudi', 'Mathura', 'Gadhinglaj', 'Rewari', 'Godhra',
    'Kharagpur', 'Srikakulam', 'Srinagar', 'Midnapore', 'Rayagada',
    'Banswara', 'Shirdi', 'Rohtak', 'Pali', 'Hathras', 'Yavatmal',
    'Balasore', 'Chhindwara', 'Bareilly', 'Vidisha', 'Thanjavur',
    'Kangra', 'Bikaner', 'Rewa', 'Porbandar', 'Nagaur', 'Nanded',
    'Rourkela', 'Nadiad', 'Gulbarga', 'Palanpur', 'Bhadrak',
    'Kurukshetra', 'Dibrugarh', 'Sagar', 'Machilipatnam',
    'Pathanamthitta', 'Bankura', 'Jammu', 'Idukki', 'Korba', 'Raigarh',
    'Silchar', 'Arrah', 'Nagaon', 'Karwar', 'Dahod', 'Nagapattinam',
    'Sikar', 'Angul', 'Baddi', 'Darjeeling', 'Raisen', 'Hoshiarpur',
    'Beed', 'Gadarwara', 'Jajpur', 'Haldia', 'Chittoor', 'Faizabad',
    'Malappuram', 'Betul', 'Surendranagar', 'Phagwara', 'Visnagar',
    'Rajnandgaon', 'Cuddalore', 'Raichur', 'Sambalpur', 'Gondia',
    'Vellore', 'Bharatpur', 'Bhuj', 'Siwan', 'Washim']

    const [posts,setPosts]=useState([]);
    const [query,setQuery]=useState("");
    const [queryprice,setQueryprice]=useState(100);
    const [queryarea,setQueryarea]=useState(5000);
    const [queryroom,setQueryroom]=useState(3);
    const [querycity,setQuerycity]=useState('Bangalore');

    async function getFlats(){
        await fetch(`/flat/getprop?bhk=${queryroom}&sqft=${queryarea}&prc=${queryprice}&cty=${querycity}&loc=${query}`)
            .then(function(res){
                // console.log(res);
                return res.json();
            })
            .then(function(data){
                const items=data;
                // console.log(items);
                setPosts(items)
                // console.log(items);
            })
    }

    useEffect(()=>{
      getFlats()
    },[query,queryprice,queryarea,querycity,queryroom])

    const RenderCard=({card})=>{
        return (
            <div className="preview-card" >
                <div className="preview-card__wrp">
                    <div className="preview-card__item">
                    <div className="preview-card__img">
                        <img src="https://images.unsplash.com/photo-1479705879471-5afa19ebdcc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="flat images"/>
                    </div>
                    <div className="preview-card__content">
                        <span className="preview-card__code">26 December 2019</span>
                        <div className="preview-card__title">{card.ADDRESS}</div>
                        <div className="preview-card__text">{card.SQUARE_FT}sqft at ₹{card.PRICE} Lakh only </div>
                        <a href="#" className="preview-card__button">READ MORE</a>
                    </div>
                    </div>

                </div>
            </div>                        
        )
    }
    // console.log(query);
    // console.log(queryprice);
    // console.log(queryarea);
    // console.log(queryroom);
    // console.log(querycity);

    return (

        <>
        <Navbar1/>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">

          <ul className="nav flex-column text-white w-100">
            <a href="#" className="nav-link h3 text-white my-2">
              Filter <i class="fa-solid fa-filter"></i> 
            </a>

            <li href="#" className="nav-link">
              <h6>Enter Price Range</h6>
              <input type="range" id="vol" name="vol" min="0.25" max="3000" value={queryprice} onChange={e=>{
                setQueryprice(e.target.value)
              }}/>  
              <p>₹{queryprice} Lakh only</p>            
            </li>

            <li href="#" className="nav-link">
            <h6>Enter Area Range</h6>
              <input type="range" id="vol" name="vol" min="3" max="30000" value={queryarea} onChange={e=>{
                setQueryarea(e.target.value)
              }}/>  
              <p>{queryarea}</p> 
            </li>

            <li href="#" className="nav-link">
            <h6>Enter Bedroom Range</h6>
              <input type="range" id="vol" name="vol" min="0" max="20" value={queryroom} onChange={e=>{
                setQueryroom(e.target.value)
              }}/>  
              <p>{queryroom}</p>               
            </li>

            <li href="#" className="nav-link">
            <h6>Enter City</h6><br/>
              {/* <Dropdown querycity={querycity} setQuerycity={setQuerycity}/> */}
              <select onChange={e=>{setQuerycity(e.target.value)}} value={querycity}>
              {
                  cities.map((city,index)=>{
                      return <option key={index} value={city} >{city}</option>
                  })
              }
              </select>

            </li>
          </ul>
        </div>

        <Container className='active-cont'>
            <div class="form-group mb-4">
            <input id="exampleFormControlInput2" type="email" placeholder="The location you dream of.." class="form-control form-control-underlined border-primary" onChange={e=>setQuery(e.target.value)} />
            </div>                
            {/* </form>      */}
           
            <h1>POSTS</h1>
            <div className="container" >
              <div className="row mt-5" >
                  {
                      posts.map((card,index)=>{
                        // <div onClick={console.log('clicked')}>
                        return <Link to={"details/"+card._id} ><RenderCard card={card} key={index}/> </Link>
                        // </div>
                      }
                      )    
                    }
              </div>
            </div>  

            {/* <Footer/>     */}
        </Container>

        </>
    )

}

export default Buyerview