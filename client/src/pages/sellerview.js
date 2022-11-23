import React, { useState, useEffect,useContext } from 'react';
import Axios from 'axios';
import { StateContext } from '../StateContext';
import './seller.css'
import Navbar1 from '../components/navbar';
import Footer from '../components/footer';

function Seller() {

  const [stateContext, setContext] = useContext(StateContext);
  const [Posted_By, setPosted_By] = useState("")
  const [UNDER_CONSTRUCTION, setUNDER_CONSTRUCTION] = useState(true)
  const [BHK_NO, setBHK_NO] = useState(0)
  const [Square_ft, setSquare_ft] = useState(0)
  const [Adress, setAdress] = useState("")
  const [PRICE, setTarget_price] = useState(0)
  const [City, setCity] = useState("")

  const [newPosted_By, newsetPosted_By] = useState("")
  const [newUNDER_CONSTRUCTION, newsetUNDER_CONSTRUCTION] = useState(true)
  const [newBHK_NO, newsetBHK_NO] = useState(0)
  const [newSquare_ft, newsetSquare_ft] = useState(0)
  const [newAdress, newsetAdress] = useState("")
  const [newTarget_price, newsetTarget_price] = useState(0)
  const [newCity, newsetCity] = useState("")

  const [flatList, setFlatList] = useState([])
  // const [sellername, setSellername] = useState("")
  // if(stateContext.username)
  // {
  //   var username=stateContext.username;  
  // }
  // console.log(Posted_By);
  console.log(stateContext.username);
  // setPosted_By(stateContext.username)
  useEffect(() => {
    Axios.get(`http://localhost:8081/flat/read?username=${stateContext.username}`).then((response) => {
      setFlatList(response.data);
    })
  }, [flatList])

  const addTolist = () => {
    // console.log(Target_price+''+City)
    Axios.post("http://localhost:8081/flat/insert",
      {

        POSTED_BY:stateContext.username ,
        UNDER_CONSTRUCTION: UNDER_CONSTRUCTION,
        BHK_NO: BHK_NO,
        SQUARE_FT: Square_ft,
        ADDRESS: Adress,
        PRICE: PRICE,
        City: City,
      })
  }

  const updateFlat = (id) => {
    Axios.put(`http://localhost:8081/flat/update`,{
      id: id,
      newTarget_price:newTarget_price,
    }); 
  }

  const deleteFlat = (id) => {
    // console.log(id);
    Axios.delete(`http://localhost:8081/flat/delete/${id}`); 
  }

  return (
    <div className="App container">
      <Navbar1/>
      {/* <label class="col">Posted_By</label> */}
      {/* <input name="POSTED_BY" placeholder="First Name" class="form"
        type="text" onChange={(event) => {
          setPosted_By(event.target.value)
        }}></input> */}
      <label class="col">UNDER_CONSTRUCTION</label>
      <select name="UNDER_CONSTRUCTION" class="form" onChange={(event) => {
        setUNDER_CONSTRUCTION(event.target.value)
      }} >
        <option value="">Select your status</option>
        <option value='0' >false</option>
        <option value='1' >true</option>
      </select>
      <label class="col">BHK_NO</label>
      <input name="BHK_NO" placeholder="No of bedrooms"
        class="form-control" type="Number" onChange={(event) => {
          setBHK_NO(event.target.value)
        }}></input>
      <label class="col">Square_ft</label>
      <input name="SQUARE_FT" placeholder="Area of the flat"
        class="form-control" type="Number" onChange={(event) => {
          setSquare_ft(event.target.value)
        }}></input>
      <label class="col">Adress</label>
      <input name="ADDRESS" placeholder="Adress"
        class="form-control" type="text" onChange={(event) => {
          setAdress(event.target.value)
        }}></input>
      <label class="col">Estimated Price</label>
      <input name="TARGET_PRICE" placeholder="Price in lakhs"
        class="form-control" type="Number" onChange={(event) => {
          setTarget_price(event.target.value)
        }}></input>
      <label class="col">City</label>
      <input name="City" placeholder="City"
        class="form-control" type="text" onChange={(event) => {
          setCity(event.target.value)
        }}></input>
      <button onClick={addTolist}>Submit</button>
      <h1> Flat_list </h1>
      {flatList.map((val, key) => {
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
