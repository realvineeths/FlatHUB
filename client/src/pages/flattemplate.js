import React ,{useEffect,useState}from 'react'
import Navbar from '../components/nav';
import './template.css'
import {useLocation} from "react-router-dom";
import Navbar1 from '../components/navbar';
import Footer from '../components/footer';

function Flattemplate() {

    const [propid,setPropId]=useState("");
    const [propDetails,setPropDetails]=useState("");

    const getpropDetails=async ()=>{
        console.log(propid);

        await fetch(`http://localhost:8081/flat/getdetails?propid=${propid}`)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                const items=data;
                setPropDetails(items[0])

            })

    }
    console.log(propDetails.UNDER_CONSTRUCTION);
    if(propDetails.UNDER_CONSTRUCTION===true)
    {   
        var listconst= <li class="list-group-item list-group-item-success">Ready to Move</li>
    }
    else{
        var listconst= <li class="list-group-item list-group-item-danger">Under Construction</li>
    }

    const location = useLocation();
    useEffect( ()=>{
        console.log(location.pathname.toString().split("/"));
        const temp= location.pathname.toString().split("/")[3];
        setPropId(temp)
        getpropDetails()
    },
    [propid])
    
    // console.log(propDetails.BHK_NO);



  return (
    <>
    <Navbar1/>
    <div className="container m-auto">
        <div className="m-4 mainWindow shadow bg-white-rounded p-1">
            
            <div className="d-flex flex-row flex-no-wrap bg-1">
            <div className="flex-grow-1 m-2">
            <img className="product-img p-2" src="https://images.unsplash.com/photo-1479705879471-5afa19ebdcc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            
            <div className="flex-grow-1 m-2 p-1">
                <div className="d-flex flex-column">
                <div className="desc p-1 d-flex justify-content-between">
                    <h4> {propDetails.ADDRESS}</h4>
                    <h4>₹{propDetails.PRICE} Lakh Only</h4>
                </div>
                <div className="seller-name p-1">
                    <h6>{propDetails.City}</h6>
                    <small>posted by {propDetails.POSTED_BY}</small>

                </div>


                {/* if(propDetails.UNDER_CONSTRUCTION===0)
                        {
                            return <li class="list-group-item list-group-item-info">This is a info list group item</li>
                        } */}

                

                <ul className="list-group mt-3">
                
                {
                    listconst
                }

                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Number of Bedroom- {propDetails.BHK_NO}
                </li>

                </ul>                

                <div className="item-desc mt-4">
                <p>Beautiful Flat with a pleasant neighbourhood and having many amenities which is a right fit for a any buyer willing to have a dream house to stay in.</p> 
                </div>

                <div className="sizes mt-1 pr-1">
                    <button type="button" className="btn btn-xs mb-1 btn-dark" onClick={()=>{alert('Seller details will be mailed to you soon')}}>Contact Seller</button>
                    <button type="button" className="btn btn-xs mb-1 btn-light"onClick={()=>{alert('Successfully added to wishlist')}}>Add to Wishlist</button>
                </div>

                    
                </div> 
            </div>
        </div>
    </div>
    </div>    
    <Footer/>
    
    </>

  )
}

export default Flattemplate