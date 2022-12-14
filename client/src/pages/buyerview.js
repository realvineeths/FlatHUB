import  React, {Component, useEffect,useState,useContext} from 'react'
import './cardisp1.scss'
// import Navbar from './navbar';
import { StateContext } from '../StateContext';
import Navbar from '../components/nav'
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Navbar1 from '../components/navbar';
import Footer from '../components/footer';

function Buyerview() {
    const arr=  [{
        // _id: ObjectId("6370940139c0cbcc5ca44332"),
        Price: 8716000,
        Area: 1575,
        Location: 'Jalahalli',
        'No_of Bedrooms': 3,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 0,
        RainWaterHarvesting: 1,
        IndoorGames: 1,
        SportsFacility: 0,
        ClubHouse: 0,
        '24X7Security': 1,
        PowerBackup: 0,
        CarParking: 0,
        Cafeteria: 0,
        MultipurposeRoom: 1,
        "Children'splayarea": 1,
        LiftAvailable: 0,
        VaastuCompliant: 0
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44333"),
        Price: 5394000,
        Area: 1120,
        Location: 'Kasavanahalli',
        'No_of Bedrooms': 2,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 0,
        RainWaterHarvesting: 0,
        IndoorGames: 1,
        SportsFacility: 0,
        ClubHouse: 1,
        '24X7Security': 0,
        PowerBackup: 1,
        CarParking: 1,
        Cafeteria: 1,
        MultipurposeRoom: 1,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 1
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44334"),
        Price: 6367000,
        Area: 1415,
        Location: 'Whitefield Hope Farm Junction',
        'No_of Bedrooms': 3,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 0,
        SportsFacility: 0,
        ClubHouse: 0,
        '24X7Security': 0,
        PowerBackup: 1,
        CarParking: 0,
        Cafeteria: 0,
        MultipurposeRoom: 0,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 0
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44335"),
        Price: 5080000,
        Area: 1270,
        Location: 'Bommasandra',
        'No_of Bedrooms': 2,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 1,
        SportsFacility: 0,
        ClubHouse: 0,
        '24X7Security': 1,
        PowerBackup: 1,
        CarParking: 1,
        Cafeteria: 0,
        MultipurposeRoom: 1,
        "Children'splayarea": 0,
        LiftAvailable: 1,
        VaastuCompliant: 0
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44336"),
        Price: 7209999,
        Area: 1311,
        Location: 'Bellandur',
        'No_of Bedrooms': 3,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 1,
        SportsFacility: 0,
        ClubHouse: 1,
        '24X7Security': 1,
        PowerBackup: 1,
        CarParking: 1,
        Cafeteria: 0,
        MultipurposeRoom: 0,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 1
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44337"),
        Price: 5700000,
        Area: 1210,
        Location: 'RR Nagar',
        'No_of Bedrooms': 2,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 0,
        SportsFacility: 0,
        ClubHouse: 1,
        '24X7Security': 0,
        PowerBackup: 1,
        CarParking: 1,
        Cafeteria: 0,
        MultipurposeRoom: 1,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 1
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44338"),
        Price: 30000000,
        Area: 3340,
        Location: 'JP Nagar Phase 1',
        'No_of Bedrooms': 4,
        MaintenanceStaff: 1,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 1,
        SportsFacility: 1,
        ClubHouse: 1,
        '24X7Security': 1,
        PowerBackup: 1,
        CarParking: 0,
        Cafeteria: 0,
        MultipurposeRoom: 0,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 0
      },
      {
        // _id: ObjectId("6370940139c0cbcc5ca44339"),
        Price: 7888000,
        Area: 1045,
        Location: 'Dasarahalli on Tumkur Road',
        'No_of Bedrooms': 2,
        MaintenanceStaff: 0,
        Gymnasium: 1,
        SwimmingPool: 1,
        JoggingTrack: 1,
        RainWaterHarvesting: 1,
        IndoorGames: 1,
        SportsFacility: 1,
        ClubHouse: 1,
        '24X7Security': 1,
        PowerBackup: 1,
        CarParking: 1,
        Cafeteria: 0,
        MultipurposeRoom: 1,
        "Children'splayarea": 1,
        LiftAvailable: 1,
        VaastuCompliant: 1
      }
    ]

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
    

    const [stateContext, setContext] = useContext(StateContext);
    const [posts,setPosts]=useState([]);
    const [query,setQuery]=useState("");
    const [queryprice,setQueryprice]=useState(100);
    const [queryarea,setQueryarea]=useState(5000);
    const [queryroom,setQueryroom]=useState(3);
    const [querycity,setQuerycity]=useState('Bangalore');
    
    async function getFlats(){
      http://localhost:8888/getprop?bhk=2&sqft=1400&prc=100&cty=Bangalore&loc=electronic      
        await fetch(`http://localhost:8081/flat/getprop?bhk=${queryroom}&sqft=${queryarea}&prc=${queryprice}&cty=${querycity}&loc=${query}`)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                const items=data;
                // console.log(items);
                setPosts(items)
                // console.log(items);
            })

            // .then(response=>{
            //     // console.log(response);
            //     console.log(response.json())
            // })
            // .catch((e)=>{
            //     console.log(e);
            // }
            // )
    }

    // useEffect(()=>{
    //     getFlats()
    // },[query]) 
    
    useEffect(()=>{
      getFlats()
    },[query,queryprice,queryarea,querycity,queryroom])

    console.log('context',stateContext.username);

    const RenderCard=({card})=>{
      // console.log(index);
      // console.log(card);
      // key={indexnum}
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
                        <div className="preview-card__text">{card.SQUARE_FT}sqft at ???{card.PRICE} Lakh only </div>
                        <a href="#" className="preview-card__button">READ MORE</a>
                    </div>
                    </div>

                </div>
            </div>                        
        )
    }
    console.log(query);
    console.log(queryprice);
    console.log(queryarea);
    console.log(queryroom);
    console.log(querycity);

    return (

        <>

        {/* <Navbar/> */}
        <Navbar1/>
        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">

          <ul className="nav flex-column text-white w-100">
            <a href="#" className="nav-link h3 text-white my-2">
              Filter <i class="fa-solid fa-filter"></i> 
            </a>

            <li href="#" className="nav-link">
              <h7>Enter Price Range</h7>
              <input type="range" id="vol" name="vol" min="0.25" max="3000" value={queryprice} onChange={e=>{
                setQueryprice(e.target.value)
              }}/>  
              <p>???{queryprice} Lakh only</p>            
            </li>


            <li href="#" className="nav-link">
            <h7>Enter Area Range</h7>
              <input type="range" id="vol" name="vol" min="3" max="30000" value={queryarea} onChange={e=>{
                setQueryarea(e.target.value)
              }}/>  
              <p>{queryarea}</p> 
            </li>

            <li href="#" className="nav-link">
            <h7>Enter Bedroom Range</h7>
              <input type="range" id="vol" name="vol" min="0" max="20" value={queryroom} onChange={e=>{
                setQueryroom(e.target.value)
              }}/>  
              <p>{queryroom}</p>               
            </li>

            <li href="#" className="nav-link">
            <h7>Enter City</h7><br/>
              {/* <Dropdown querycity={querycity} setQuerycity={setQuerycity}/> */}
              <select onChange={e=>{setQuerycity(e.target.value)}} value={querycity}>
              {
                  cities.map((city,index)=>{
                      return <option key={index} value={city} >{city}</option>
                  })
              }
              </select>

              {/* <p>{queryroom}</p>                */}
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
                    // posts.map(renderCard)
                      posts.map((card,index)=>{
                        // <div onClick={console.log('clicked')}>
                        return <Link to={"details/"+card._id} ><RenderCard card={card} key={index}/> </Link>
                        // </div>
                      }
                      )                   
                    }
              </div>
            </div>  

            <Footer/>    
        </Container>

        </>
    )    

}

export default Buyerview