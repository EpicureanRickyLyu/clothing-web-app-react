import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
       //product:id,name,imageUrl,price
       //search in cartitems list find the same product
       const existingItem = cartItems.find((item)=>(item.id === productToAdd.id)?item:null)
       //if exist quantity ++
       if(existingItem)
       {
        //存在的话返回映射，改变数组数值，不改变长度
        return cartItems.map((item)=>
            {
                if(item.id === productToAdd.id)
                {
                    return {...productToAdd,quantity:item.quantity+=1}//?++ not working??
                }
                else
                return item;
            }
        )     
       }
       else
       return [...cartItems,{...productToAdd,quantity:1}]
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems : [],
    addItemToCart:()=>{},
    cartCount : 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false) ;
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setcartCount] = useState();
    useEffect(()=>{
        const newcartCount = cartItems.reduce((callbackTotal,cartItem)=>{
            return callbackTotal + cartItem.quantity
        },0)////reduce?????
        setcartCount(newcartCount);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        console.log("add",productToAdd);
        //setitem change states
        setCartItems(addCartItem(cartItems,productToAdd));
        console.log("cart",cartItems);
    }

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}