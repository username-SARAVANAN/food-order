import { createContext, useState } from "react";

const UserProgressContext=createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
})

export function UserProgressContextProvider({children}){
    const [userProgress,setUserProgresss]=useState('');

    function showCart(){
        setUserProgresss("cart");
    }

    function hideCart(){
        setUserProgresss("");
    }

    function showCheckout(){
        setUserProgresss("checkout");
    }

    function hideCheckout(){
        setUserProgresss("");
    }

    const userProgressCtx={
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}

export  default UserProgressContext;