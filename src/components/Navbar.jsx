import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext"
import { CartContext } from "../Contexts/Cartcontext";
import { AuthContext } from "../Contexts/loginContext";
export const Navbar=()=>{
const nav=[
    {title:"Home",to:"/"},
    {title:"Men",to :"/mens"},
    {title:"Women" ,to:"/womens"} ,
    {title:"About Us",to :"/about"},
    
]

const {len}=useContext(CartContext);
const {Theme,handleTheme}=useContext(ThemeContext);
const {isAuth ,handleAuth}=useContext(AuthContext);
return (<div style={{

    height:"70px",
    backgroundColor:"coral",
    display:"grid",
    gridTemplateColumns:"30% 10% 10% 10% 10% 10% 10%",
    justifyContent:"space-between",
    color:"white"
}}> 
{nav.map((e,i)=>(
<Link key={i} to={e.to} style={{margin:"10px",textDecoration:"none",color:"white",padding:"14px"}}>
    {e.title}

</Link>

))}
<Link  style={{padding:"25px",textDecoration:"none",color:"white"}} key={1} to={isAuth?"/signup":"/login"}>{isAuth?"Logout" :"Login"}</Link>
<button onClick={()=>{handleTheme()}} style={{backgroundColor:"coral" ,color:"white",height:"30px",width:"70px",marginTop:"24px",marginLeft:"20px",fontSize:"15px"}}>{Theme? "Light": "Dark"}</button>
<Link  style={{padding:"25px",textDecoration:"none",color:"white"}} key={1} to="/cart">Cart {len}</Link>

</div>)

}