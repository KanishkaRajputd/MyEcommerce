import { createContext, useContext, useState } from "react";
export const CartContext=createContext();

export const CartContextProvider=({children})=>{
const [len,setlen]=useState(0);

async function handleLength(){
const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
setlen(data.length);

}


return <CartContext.Provider value={{len,handleLength}}>
    {children}
</CartContext.Provider>

}