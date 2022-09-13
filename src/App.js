import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './styles/App.scss'
import {AuthContext} from './context'


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    console.log('before', isAuth)
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
    console.log('after', isAuth)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
