"use client"
import { createContext, useState } from "react";

export const PrePageContext = createContext();

export const PrePageProvider = ({ children}) =>{
    const [visit, setVisit] = useState("firstVisit"); //State to define that the user is visiting the page por the first time

    const toggleVisit = () =>{
        setVisit("visited");
        console.log(visit);

    }; //function to change the visit 

    return(
        <PrePageContext.Provider value={{visit, toggleVisit}}>
            {children}
        </PrePageContext.Provider>
    );
};