import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { useEffect,useState} from "react";
import Loader from './loader';
import Homepage from './pages/homepage';
import Buyerview from './pages/buyerview';
import Flattemplate from './pages/flattemplate';
import Seller from './pages/sellerview';
import './App.css'
import Login1 from './login/login1';
import Predict1 from './predictview/predict1';

function App() {

  const [userToken,setUserToken]=useState("");

  useEffect(()=>{
    const userid = localStorage.getItem("userstore");
    setUserToken(userid);
  },[])

console.log('token..',userToken);

  return userToken===null ? (
    //incase the user is not authecticated
    <BrowserRouter>
    <Routes>
            <Route path='*' exact  element={<Login1/>}/>
    </Routes>
    </BrowserRouter>
  ) :userToken ? (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='buyerview/details/:id' element={<Flattemplate/>}/>
        <Route path='/buyerview' exact element={<Buyerview/>}/>
        <Route path='/sellerview' exact element={<Seller/>}/>

        <Route path='/predict' exact element={<Predict1/>}/>
      </Routes>

    </BrowserRouter>
    </>

  ) :(
    <Loader/>
  )

}

export default App;