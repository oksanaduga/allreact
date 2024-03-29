import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router";
import {AuthContext} from '../context'
import Loader from "./ui/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  
  if (isLoading) {
    return <Loader />
  }

	return (
    isAuth
       ?
       <Routes>
        {
          privateRoutes.map(route =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )
        }
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
      :
      <Routes>
        {
          publicRoutes.map(route =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )
        }
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
	)
}

export default AppRouter