import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Fabric from './pages/fabric';
// import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';

const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact  element={<Login/>}/>
                    <Route path='/register' exact  element={<Register/>}/>
                    <Route path='/homepage' exact  element={<Fabric/>}/>
                    <Route path='/logout' exact  element={<Login/>}/>
                    <Route path='*' exact  element={<Login/>}/>
                </Routes>            
            </BrowserRouter>

        </>
    )
}

export default App