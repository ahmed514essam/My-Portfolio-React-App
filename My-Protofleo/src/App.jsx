import Root from "./Root";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";


import Projects from "./Pages/Projec/Projects";
import Skill from "./Pages/Skill/Skill";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
    <Route path="/" element={<HomePage/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/ContactMe" element={<Contact/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/Skill" element={<Skill/>} />
</Route>

    </Routes>
  </BrowserRouter>
  
  )
}

export default App
