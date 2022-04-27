import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Home } from "./Home";

export const MensDetails=()=>{
const [menData,setData]=useState({});
    const {id}=useParams();


useEffect(()=>{
    getData();
},[]);
async function getData(){

const data=await fetch(`http://localhost:8080/men/${id}`).then((d)=>d.json());
setData(data);




}
return (<div style={{ display:"grid",gridTemplateColumns:"30% 66%",justifyContent:"space-around",marginTop:"40px"}}>
    <div style={{border:"1px solid teal",height:"300px"}}><img style={{height:"100%"}} src={menData.image_url}/></div>
<div style={{border:"1px solid teal"}}>

    <h1 style={{color:"teal"}} >{menData.name}</h1>
    <p >{menData.title}</p>
    <h4>Rs.{menData.price}</h4>
    <h4 style={{textDecoration:"line-Through"}}>Rs.{menData.strikedoffprice}</h4>
    <button style={{backgroundColor:"coral",color:"white",marginBottom:"10px"}}>Order Now</button>


</div>

</div>)
}