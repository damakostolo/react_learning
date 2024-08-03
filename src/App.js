import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import NavbarTop from "./component/UI/Navbar/NavbarTop/NavbarTop";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./constect";


function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    }, []);
  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
      }}>
          <BrowserRouter>
              <NavbarTop/>
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
