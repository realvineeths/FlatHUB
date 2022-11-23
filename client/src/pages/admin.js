import React,{useState,useEffect,useCallback} from 'react'
import Axios from 'axios';
import Navbar from '../components/nav';



function Admin() {

  const [flatList, setFlatList] = useState([])
  const [query,setQuery]=useState("");

  const [newTarget_price, newsetTarget_price] = useState(0)

  const readFlat=useCallback(()=>{
    Axios.get(`http://localhost:8081/flat/readadmin?username=Owner&loc=${query}`).then((response) => {
      setFlatList(response.data);
    })
  },[flatList,query])

  useEffect(() => {
    readFlat()
  }, [flatList,query])  

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

  console.log(query);

  return (
    <>
    <Navbar/>
    <div className='container'>
    <h1>WELCOME ADMIN</h1>
      <h2> Flat_list </h2>
      <div class="form-group mb-4">
            <input id="exampleFormControlInput2" type="email" placeholder="Enter the location " class="form-control form-control-underlined border-primary" onChange={e=>setQuery(e.target.value)}  />
        </div>       
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
          <button onClick={()=>deleteFlat(val._id)}>DELETE</button>
        </div>
      })
      }        

    
    </div>
    </>
  )
}

export default Admin