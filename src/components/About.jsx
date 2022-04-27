import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react"; 

export const About =()=>{

    const {Theme}=useContext(ThemeContext);
    return (<div style={Theme?{height:"1000px",backgroundColor:"black",color:"white"}:{backgroundColor:"white",textAlign:"center"}}> 
    
    
    
    <div class="gmap_canvas" style={{
    overflow:"hidden",
    background:"none!important",
    height:"370px",
    width:"500px",
    marginTop:"50px",
    marginLeft:"30%"

}} >
    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=$Dhampur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    <a href="https://putlocker-is.org"></a>
    <br/><a href="https://www.embedgooglemap.net">embed a google map in html</a>
</div>
<img style={{height:"150px",width:"150px",borderRadius:"50%",border:"2px solid teal",marginTop:"40px"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQGJPYpFrKWMew/profile-displayphoto-shrink_800_800/0/1650038531300?e=1656547200&v=beta&t=HB9o8wGxSdR5rp7Yd7XTAwIui4kVVhuyS6El_89bUnE"/>
       <h3>C.E.O - Kanishka Rajput</h3>
    <h3 style={{color:"green"}}>What's app - 916324225522</h3>
    <h4>Location- Dhampur , Uttar Pradesh</h4>
    
      </div>)
}