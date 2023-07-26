import React,{useState} from 'react'
import Footer from '../components/footer';
import Navbar1 from '../components/navbar';
import './predict.scss'

function Predict1() {

    const [queryconst,setQueryconst]=useState(1);
    const [queryarea,setQueryarea]=useState(5000);
    const [queryroom,setQueryroom]=useState(3);
    const [querycity,setQuerycity]=useState('Bangalore');
    const [queryresult,setQueryresult]=useState(0);


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

    async function handleSubmit(e){
        // await fetch('http://localhost:5000/api',)
        e.preventDefault();
        const data={
            "UNDER_CONSTRUCTION":queryconst,
            "BHK_NO.":queryroom,
            "SQUARE_FT":queryarea,
            "City":querycity
        }

        await fetch('http://localhost:5000/api', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cross-origin:'ananymous',
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // Access-Control-Allow-Origin: "*",
            headers: {
              'Content-Type': 'application/json',

                // 'Access-Control-Allow-Origin':'http://localhost:5000/api' 

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then((res)=>{
            console.log(res);
            return res.json()
          })
          .then(d=>{
            // console.log(d);
            setQueryresult(d)
          })       
          .catch(e=>{
            console.log(e);
          })
        // console.log(response);
    }

  return (
    <>    
    <Navbar1/>
    <div className="predict">
      <div className="predictcard">
        <div className="left">
          <h1>FlatHUB</h1>
          <h5>₹{queryresult}Lakh Only</h5>

        </div>
        <div className="right">
          <h1>Prediction Analysis</h1>
          <form onSubmit={handleSubmit}>

            <label>Enter Area</label>
            <input type="number" className="form-control" value={queryarea} onChange={e=>{
                    setQueryarea(e.target.value)
                }}  placeholder="Area input"/>              

            <label for="exampleFormControlSelect1">Enter City</label>
            <select className="form-control" onChange={e=>{setQuerycity(e.target.value)}} value={querycity}  id="exampleFormControlSelect1">

            {
                cities.map((city,index)=>{
                    return <option key={index} value={city} >{city}</option>
                })
            }        
            </select>

            <label>Enter BHK No</label>
            <input type="number" className="form-control" placeholder="Bhk no input"  value={queryroom} onChange={e=>{
                    setQueryroom(e.target.value)
                }}/>


            <label >UNDER CONSTRUCTION:</label>
            
            <div className=" ">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={e=>{setQueryconst(1)}}  value={queryconst}/>
                <label className="form-check-label" for="inlineRadio1">Yes</label>
            </div>

            <div className="">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onClick={e=>{setQueryconst(0)}} value={queryconst}/>
                <label className="form-check-label" for="inlineRadio2">No</label>
            </div>

            <button type="submit" >Submit</button>

              {/* {error } */}
            {/* <button type="submit" >Login</button> */}
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>    
  )
}

export default Predict1