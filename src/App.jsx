
import logo from './logo.svg'
import './App.css'
import { Navbar } from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import { Mens } from "./components/Men";
import { Womens } from "./components/Women";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Deal } from "./components/Deal";
import { Login } from './components/Login';
import { useContext } from 'react';
import { ThemeContext } from './Contexts/ThemeContext';
import { Signup } from "./components/signup"
import { PrivalteRouter } from './components/privateRoute';
import { Footer } from './components/Footer';
import { HomeDetails } from "./components/HomeDetails";
import { MensDetails } from './components/MenDetails';
import { WomenDetails } from './components/WomenDetails';


function App() {


  return (
    <div className="App" >

     <Navbar/>
    
     <Routes> 
       <Route path="/cart"
         element={
           <PrivalteRouter>
             <Cart/>
           </PrivalteRouter>
         }
>
       </Route>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/mens' element={<Mens/>}></Route>
       <Route path='/womens' element={<Womens/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/:id' element={<HomeDetails />}></Route>
       <Route path='/mens/:id' element={<MensDetails/>}></Route>
       <Route path='/womens/:id' element={<WomenDetails/>}></Route>
     </Routes>

  
<Footer/>
    </div>
  )
}

export default App
