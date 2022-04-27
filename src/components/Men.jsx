import { Link } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { StyleDiv,UnderDiv ,Filters} from "./Mydiv";
import { Deal } from "./Deal";
import { CartContext } from "../Contexts/Cartcontext";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/loginContext";

export const Mens=()=>{
    const [Data,setdata]=useState([]);
    const {handleLength}=useContext(CartContext);
    const {Theme}=useContext(ThemeContext);
    const {isAuth}=useContext(AuthContext);

useEffect(()=>{
getData();
handleLength()

},[]);

async function getData() {
    const data=await fetch("http://localhost:8080/men").then(d=>d.json());
     setdata(data);
    //  console.log(data);
}
async function handleChange(e){
    const data=await fetch("http://localhost:8080/men").then(d=>d.json());
if(e.target.value=="All"){
    getData();
}else{
const dat=data.filter((a)=>{
    
return a.Type===e.target.value;
});
setdata(dat);

}
}


function handleSelect(e){
    if(e.target.value=="low"){
const data=[...Data].sort((a,b)=>{
  return a.price-b.price;
});
setdata(data);
    }
    if(e.target.value=="high"){
      const data=[...Data].sort((a,b)=>{
          return b.price-a.price;
      });
      setdata(data);
    }
    if(e.target.value=="sort"){
        getData();
    }
  }
  


    return (<div>
        
        <Deal/>

    
        <select style={{backgroundColor:"lightgray",fontSize:"15px",marginLeft:"90%",marginTop:"30px"}} onChange={handleSelect} >
        <option value="sort">Sort</option>
        <option value="high" >High To Low</option>
        <option value="low">  Low To High</option>
        </select>

        <div style={Theme?{width:"100%",backgroundColor:"black",display:"flex"}:{width:"100%",backgroundColor:"white",display:"flex"}}>

    

         
 <Filters onChange={handleChange}   style={Theme?{backgroundColor:"black",color:"white",marginTop:"50px"}:{backgroundColor:"white"}}>
<h2>Filter</h2>
<h3><input type="radio" value="Tshirt" name="Filter"/>T-Shirt</h3>
<h3><input type="radio" value="Shoes" name="Filter"/>Shoes</h3>
<h3><input type="radio" value="Kurta" name="Filter"/>Kurta-Pajama</h3>
<h3><input type="radio" value="Pants" name="Filter"/>Pants</h3>
<h3><input type="radio" value="Jacket" name="Filter"/>Jacket</h3>
<h3><input type="radio" value="All" name="Filter"/>All</h3>
 </Filters>
       
    <StyleDiv >{Data.map((e)=>(

      
     <UnderDiv>
          <div >
          <Link to={`/mens/${e.id}`} >  <img style={{height:"98%",width:"98%",border:"1px solid teal",margin:".6%"}} src={e.image_url}/>
          </Link>
          </div>
         <div style={Theme?{backgroundColor:"coral"}:{backgroundColor:"white"}}>
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

            }}>Add To Cart</button>
         </div>
     </UnderDiv>



    ))}</StyleDiv>
    </div>
    </div>
    )
}