import { createContext, useEffect, useState } from "react";
import { food_list } from "../frontend_assets/assets";

export const StoreContext = createContext();





const StoreContextProvider = (props)=>{


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev, [itemId]: 1}));
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
        }
    }

    const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
    }

    const contextValue= {food_list, cartItems, setCartItems, addToCart, removeFromCart}; //imp

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems]);

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;