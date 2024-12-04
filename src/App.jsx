import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from './pages/AboutPage'
import ContactUs from "./pages/ContactUs";
import { Routes,Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element = {<AboutPage/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>
      <Route path="/products" element ={<AllProducts/>}/>
    </Routes>
   <Footer />
    </>
  )
}

export default App
