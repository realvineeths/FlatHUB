import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { useCallback, useContext, useEffect} from "react";
import { StateContext } from './StateContext'
import Login from "./pages/login";
// import Fabric from "./pages/fabric";
import Register from './pages/register';
import Loader from './loader';
import Homepage from './pages/homepage';
import Buyerview from './pages/buyerview';
import Flattemplate from './pages/flattemplate';
import Seller from './pages/sellerview';
import Prediction from './pages/prediction';
import './App.css'
import Admin from './pages/admin';
import Loginadmin from './pages/loginadmin';
import Login1 from './login/login1';
import Admin1 from './admin/adminview1';
import Register1 from './register/Register';
import Predict1 from './predictview/predict1';

function App() {
  const [context, setContext] = useContext(StateContext);
  const verifyUser = useCallback(() => {
    fetch("http://localhost:8081/users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setContext((oldValues) => {
          return { ...oldValues, token: null };
        });
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      // setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [setContext]);

  useEffect(() => {
    verifyUser();
  // eslint-disable-next-line    
  }, [verifyUser]);

  /**
   * Sync logout across tabs
   */
  const syncLogout = useCallback((event) => {
    if (event.key === "logout") {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [syncLogout]);

  return context.token===null ? ( 
    //incase the user is not authecticated
    <BrowserRouter>
    <Routes>
            <Route path='/register' exact  element={<Register1/>}/>
            <Route path='/loginadmin' exact  element={<Admin1/>}/>
            <Route path='/adminview' exact element={<Admin/>}/>
            <Route path='*' exact  element={<Login1/>}/>
    </Routes>            
    </BrowserRouter>      
         
  ) :context.token ? (
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
    {/* <Seller/>
    {/* <Homepage/> */}
    </>

  ) :(
    <Loader/>
  )




}

export default App;