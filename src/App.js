import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Home from "./components/Home";


function App() {
  return (
    <>
     <NavBar/>
    <Routes>

      <Route  path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
    </Routes>
   
  
    </>
  );
}

export default App;
