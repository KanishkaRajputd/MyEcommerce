import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Home } from "./Home";

export const HomeDetails=()=>{
const [HomeData,setData]=useState({});
    const {id}=useParams();


useEffect(()=>{
    getData();
},[]);
async function getData(){

const data=await fetch(`http://localhost:8080/home/${id}`).then((d)=>d.json());
setData(data);

}
return (<div style={{ display:"grid",gridTemplateColumns:"30% 66%",justifyContent:"space-around",marginTop:"40px"}}>
    <div style={{border:"1px solid teal"}}><img src={HomeData.image_url}/></div>
<div style={{border:"1px solid teal"}}>

    <h1 style={{color:"teal"}} >{HomeData.name}</h1>
    <p >{HomeData.title}</p>
    <h4>Rs.{HomeData.price}</h4>
    <h4 style={{textDecoration:"line-Through"}}>Rs.{HomeData.strikedoffprice}</h4>
    <button style={{backgroundColor:"coral",color:"white",marginBottom:"10px"}}>Order Now</button>


</div>

</div>)
}