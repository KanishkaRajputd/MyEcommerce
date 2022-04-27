import { useContext } from "react"
import { AuthContext } from "../Contexts/loginContext";
import { useNavigate } from "react-router-dom";


export const Login=()=>{
const {handleAuth}=useContext(AuthContext);
const navigate=useNavigate();



return (<form onSubmit={()=>{
    handleAuth(true);
    navigate("/cart" , {replace:true});
   
}} >

<input style={{height:"30px",margin:"10px",width:"200px" }} type="text" placeholder="First Name"/>
<br/>
<input style={{height:"30px",margin:"10px",width:"200px" }} type="text" placeholder="Last Name"/>
<br/>
<input style={{height:"30px",margin:"10px",width:"200px" }} type="email" placeholder="Email"/>
<br/>
<input style={{height:"30px",margin:"10px",width:"200px" }} type="password" placeholder="Password"/>
<br/>
<input style={{height:"30px",margin:"10px",backgroundColor:"coral",color:"white",width:"70px" }} type="submit" value="Login"/>

</form>)

}