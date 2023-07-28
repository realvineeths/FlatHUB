import React, { useState, useEffect,useContext } from 'react';
import Axios from 'axios';
import './seller.css'
import Navbar1 from '../../components/navbar';
import Footer from '../../components/footer';

function Seller() {

  const [Posted_By, setPosted_By] = useState("")
  const [UNDER_CONSTRUCTION, setUNDER_CONSTRUCTION] = useState(true)
  const [BHK_NO, setBHK_NO] = useState(0)
  const [Square_ft, setSquare_ft] = useState(0)
  const [Adress, setAdress] = useState("")
  const [PRICE, setTarget_price] = useState(0)
  const [City, setCity] = useState("")
  const [username,setUsername]=useState("")
  const [update, setUpdate] = useState(0);
  const [newPosted_By, newsetPosted_By] = useState("")
  const [newUNDER_CONSTRUCTION, newsetUNDER_CONSTRUCTION] = useState(true)
  const [newBHK_NO, newsetBHK_NO] = useState(0)
  const [newSquare_ft, newsetSquare_ft] = useState(0)
  const [newAdress, newsetAdress] = useState("")
  const [newTarget_price, newsetTarget_price] = useState(0)
  const [newCity, newsetCity] = useState("")

  const [flatList, setFlatList] = useState([])

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
  'Vellore', 'Bharatpur', 'Bhuj', 'Siwan', 'Washim'];

  useEffect(()=>{
    try {
      const userId=localStorage.getItem("userstore");
      setUsername(userId);
    } catch (error) {
      console.log(error);
    }

  },[])

  // http://localhost:8081
  useEffect(() => {
    Axios.get(`/flat/read?username=${username}`).then((response) => {
      // console.log(response.data);
      setFlatList(response.data);
    })
    .catch((e)=>{
      console.log(e);
    })
  }, [username,update])

  const addTolist = () => {
    Axios.post("/flat/insert",
      {

        POSTED_BY:username ,
        UNDER_CONSTRUCTION: UNDER_CONSTRUCTION,
        BHK_NO: BHK_NO,
        SQUARE_FT: Square_ft,
        ADDRESS: Adress,
        PRICE: PRICE,
        City: City
      })
      .then(()=>setUpdate(!update))
      .catch((e)=>{console.log(e)});
  }

  const updateFlat = (id) => {
    Axios.put(`/flat/update`,{
      id: id,
      newTarget_price:newTarget_price,
    })
    .then(()=>setUpdate(!update))
    .catch((e)=>{console.log(e)});
  }

  const deleteFlat = (id) => {
    Axios.delete(`/flat/delete/${id}`)
    .then(()=>setUpdate(!update))
    .catch((e)=>{console.log(e)});
  }


  return (
    <div className="App container">
      <Navbar1/>
      <label className="col">UNDER_CONSTRUCTION</label>
      <select name="UNDER_CONSTRUCTION" className="form" onChange={(event) => {
        setUNDER_CONSTRUCTION(event.target.value)
      }} >
        <option value="">Select your status</option>
        <option value='0' >false</option>
        <option value='1' >true</option>
      </select>

      {/* <select name="City" className="form" onChange={(event) => {
        setCity(event.target.value)
      }} >
              {
                  cities.map((city,index)=>{
                      return <option key={index} value={city} >{city}</option>
                  })
              }
      </select>       */}
      <label className="col">BHK_NO</label>
      <input name="BHK_NO" placeholder="No of bedrooms"
        className="form-control" type="Number" onChange={(event) => {
          setBHK_NO(event.target.value)
        }}></input>
      <label className="col">Square_ft</label>
      <input name="SQUARE_FT" placeholder="Area of the flat"
        className="form-control" type="Number" onChange={(event) => {
          setSquare_ft(event.target.value)
        }}></input>
      <label className="col">Adress</label>
      <input name="ADDRESS" placeholder="Adress"
        className="form-control" type="text" onChange={(event) => {
          setAdress(event.target.value)
        }}></input>
      <label className="col">Estimated Price</label>
      <input name="TARGET_PRICE" placeholder="Price in lakhs"
        className="form-control" type="Number" onChange={(event) => {
          setTarget_price(event.target.value)
        }}></input>
      <label className="col">City</label>
      <input name="City" placeholder="City"
        className="form-control" type="text" onChange={(event) => {
          setCity(event.target.value)
        }}></input>
      <button onClick={addTolist}>Submit</button>
      <hr/>
      <h1 style={{top:"50px"}}> Your Ads : </h1>
      {
        flatList.length==0?
          <h3>Post Your First AD Now!!😉</h3>
        :
        flatList.map((val, key) => {
        return <div key={key} className="flat">
          {/* <h2>{val.POSTED_BY}</h2> */}
          <h2>{val.ADDRESS}</h2>
          <h2>{val.PRICE} Lakh only</h2>
          <input type="text" placeholder="New price" onChange={(event) => {
            newsetTarget_price(event.target.value)
          }} >
          </input>
          <button onClick={() => updateFlat(val._id)}>update</button>
          {/* <button onClick={() => updateFlat(val._id)}>update</button> */}
          <button onClick={()=>deleteFlat(val._id)}>DELETE</button>
        </div>
      })}
      {/* <div id='footid' className='container-fluid'> 
        <Footer/>
      </div> */}
    </div>
  );
}

export default Seller;
