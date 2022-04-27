import { useContext, useEffect,useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
export const Deal=()=>{

const [deal,setdeal]=useState([]);
const {Theme}=useContext(ThemeContext);

useEffect(()=>{
getData();

},[]);

async function  getData() {
    
    const data=await fetch("http://localhost:8080/deal").then(d=>d.json());

       setdeal(data);
       var i=0;
    //    console.log(data)
setInterval(() => {
    if(i==data.length){
        i=0;
    }
    setdeal(data[i]);
    i++
}, 5000);

}
   

return (<div 
    style={Theme?{display:"grid",
            gridTemplateColumns:"30% 70%",
            border:"2px solid teal",
            height:"330px",
            fontSize:"30px",
            backgroundColor:"black",
            color:"white"
            
            

}:{display:"grid",
gridTemplateColumns:"30% 70%",
border:"2px solid teal",
height:"330px",
fontSize:"30px",
backgroundColor:"white"
}}><img style={{height:"95.4%",width:"100%",borderRadius:"5px"}} src={deal}/>
<div>
<h1>GET 50% OFF ON EVERY MONDAY</h1>
<h2>BEST DEALS FOR MEN AND WOMEN</h2>

</div>
       

</div>)

}