import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
const [isAuth,setAuth]=useState(false);



const handleAuth=(state)=>{
setAuth(state);
console.log(state);
}
return (<AuthContext.Provider value={{isAuth,handleAuth}}>
    {children}
</AuthContext.Provider>)

}