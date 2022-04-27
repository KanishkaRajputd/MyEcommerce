import { createContext, useContext, useState } from "react";

export const ThemeContext=createContext();


export const ThemeContextProvider=({children})=>{

const [Theme,setTheme]=useState(false);

const handleTheme=()=>{
    setTheme(!Theme);
}
return (<ThemeContext.Provider value={{Theme,handleTheme}}>
    {children}
</ThemeContext.Provider>)


}