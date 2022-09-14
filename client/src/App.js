import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
    	<BrowserRouter>
	<div className='App'>
            <Routes>
              <Route element={<Main/>} path="/home" default />            
              <Route element={<Detail />} path="/product/:id" />
              <Route element={<Update />} path="/product/edit/:id" />
            </Routes>
        </div>
    	</BrowserRouter>
    ) 
}
export default App;
