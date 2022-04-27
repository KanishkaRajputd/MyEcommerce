import { useContext, useEffect,useState } from "react";
import { CartContext } from "../Contexts/Cartcontext";
import { StyleDiv,UnderDiv } from "./Mydiv";
import { Deal } from "./Deal";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/loginContext";
import {Link} from "react-router-dom";

export const Home=()=>{
    const [Data,setdata]=useState([]);
const {handleLength}=useContext(CartContext);
const {Theme}=useContext(ThemeContext);
const {isAuth}=useContext(AuthContext);

useEffect(()=>{
getData();

},[Theme]);

async function getData() {
    const data=await fetch("http://localhost:8080/home").then(d=>d.json());
     setdata(data);
     
     
}


    return (<div>
        <Deal/>


    <StyleDiv style={Theme?{width:"100%",backgroundColor:"black"}:{width:"100%",backgroundColor:"white"}}>{Data.map((e)=>(

      <UnderDiv >
      <div>
          
          
          
      <Link to={`/${e.id}`} >   
          <img style={{height:"98%",width:"98%",border:"1px solid teal",margin:".6%"}} src={e.image_url}/>
          </Link>
          </div>
      <div style={Theme?{backgroundColor:"coral",textDecoration:"none"}:{backgroundColor:"white",textDecoration:"none"}}>
          <h4>{e.name}</h4>
          <p>Rs.{e.price}</p>
          <p style={{textDecoration:"line-through"}}>
              Rs.{e.strikedoffprice}</p>
          <button
          onClick={()=>{
             handleLength();
             getData()

              const data=e;
             fetch("http://localhost:8080/cart",{
                 method:"POST",
               headers:{
                   "content-type":"application/json"
               },
               body:JSON.stringify(data)
             })

          }}
          
          >Add To Cart</button>
      </div>
  </UnderDiv>
   



    ))}</StyleDiv></div>)
}