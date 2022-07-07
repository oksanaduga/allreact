import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
	return (
		<div>
      <Routes>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/posts' element={<Posts />}/>
        <Route exact path='/error' element={<Error />}/>
        {/* <Route exact path='/error' element={ <Navigate to='/error' />}/> */}
        {/* <Route path="*" element={<Navigate to='/error' />} /> */}
      </Routes>

     
        

    </div>
	)
}

export default AppRouter