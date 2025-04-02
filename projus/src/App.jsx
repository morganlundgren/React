import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Starttid from "./pages/Starttid";
import Carousel from "./components/Carousel";
import Kontakt from "./pages/Kontakt";
import Medlemskap from "./pages/Medlemskap";
import Historia from "./pages/Historia";
import Banguide from "./pages/Banguide";
import Tavling from "./pages/Tavling";

function App() {

  return(
	<Router>
		< Header/>
		<Routes>
     		<Route path="/" element={<Home />} />
			<Route path ="/Starttid" element={<Starttid />} />
			<Route path ="/Kontakt" element ={<Kontakt />} />
        	<Route path ="/Medlemskap" element ={<Medlemskap />} />
			<Route path ="/Historia" element ={<Historia />} />
			<Route path ="/Banguide" element ={<Banguide />} />
			<Route path ="/Tavling" element ={<Tavling />} />

      	</Routes>
		<Carousel/>
		<Footer/>
	</Router> 
  )

}

export default App
