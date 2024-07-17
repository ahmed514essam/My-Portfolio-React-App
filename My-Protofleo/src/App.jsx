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

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
    <Route path="/" element={<HomePage/>} />
</Route>

    </Routes>
  </BrowserRouter>
  
  )
}

export default App
