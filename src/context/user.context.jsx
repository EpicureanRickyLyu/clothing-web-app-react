import { createContext, useEffect, useState } from "react";
import { createUserDocFrom, OnAuthstatecahngeListener } from "../utilities/firebase.utils";
export const Usercontext =  createContext({
    currentUser : null,
    setcurrentUser : ()=>null,
});

export const UserProvider = ({children}) =>{
    const[currentUser,setcurrentUser] = useState(null);
    const value = {currentUser,setcurrentUser};//get value and set funciton by value

    useEffect(()=>{
       OnAuthstatecahngeListener((user)=>{
        if(user)
        {
            createUserDocFrom(user);
        }
        console.log(user); 
        setcurrentUser(user);
       });
    },[]);//keep tacking auth from firebase

    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>
}
//children 