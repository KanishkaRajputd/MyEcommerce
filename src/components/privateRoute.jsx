import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/loginContext";

export const PrivalteRouter=({children})=>{


const {isAuth}=useContext(AuthContext);

if(!isAuth){
return <Navigate to="/login" replace={false}/>
}
else{
    return children;
}
}