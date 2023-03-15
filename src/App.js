import { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import MailList from "./components/layout/MailList";
import Footer from "./components/layout/Footer";
import Errorpage from "./components/pages/Errorpage";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Home from "./components/pages/hotels/Home";
import Flights from "./components/pages/flights/Flights";



import "./components/stylesheets/auth.css";
import "./components/stylesheets/layout.css";
import CarsRental from "./components/pages/carsRental/CarsRental";



// import { initialState, reducer } from "./components/pages/auth/UseReducer";


// 1: contextAPI
export const LoginContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)  
  const [loggedIn, setLoggedIn] = useState(localStorage.token ? true : false);

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.removeItem('token')
    }
  }
  useEffect(() => {
    console.log(loggedIn)
    const loggeduser = JSON.parse(localStorage.getItem("token"))

    if (loggeduser) {
      // console.log(loggedIn)
      setLoggedIn(true); console.log('logged In frm App...')
    }
  }, [loggedIn])

  return (
    <LoginContext.Provider value={{ loggedIn, changeLoggedIn }}>
      <Router>
        <>

          <Navbar />
          <Header />
          <div className="main">
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/flights" exact element={<Flights />} />
              <Route path="/cars" exact element={<CarsRental />} />

              <Route path="*" element={<Errorpage />} />
            </Routes>
          </div>
          <MailList />
          <Footer />

        </>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;