import { createContext, useEffect, useState } from "react";
const ClearCartItem = (cartItems, productToClear) => {
    //product:id,name,imageUrl,price
    //search in cartitems list find the same product
    const existingItem = cartItems.find((item)=>(item.id === productToClear.id)?item:null)
     
    if(existingItem)
    return cartItems.filter((item)=>(item.id !== existingItem.id))
}
const rmCartItem = (cartItems, productToRm) => {
    //product:id,name,imageUrl,price
    //search in cartitems list find the same product
    const existingItem = cartItems.find((item)=>(item.id === productToRm.id)?item:null)
    //如果 num = 1 需要改变长度，用filter返回除了目标item的数组 
    if(existingItem.quantity === 1)
    return cartItems.filter((item)=>(item.id !== existingItem.id))
    else
    {
     //存在的话返回映射，改变数组数值，不改变长度
     return cartItems.map((item)=>
         {
             if(item.id === productToRm.id)
             {
                 return {...productToRm,quantity:item.quantity-=1}//?++ not working??
             }
             else
             return item;
         }
     )     
    }
}
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
    removeItemfromCart : ()=>{},
    ClearitemfromCart : ()=>{},
    cartTotal : 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false) ;
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setcartCount] = useState();
    const [cartTotal,setCartTotal] = useState();
    //total price
    useEffect(()=>{
        const newcartTotal = cartItems.reduce((callbackTotal,cartItem)=>{
            return callbackTotal + (cartItem.quantity * cartItem.price)
        },0)////reduce?????
        setCartTotal(newcartTotal);
    },[cartItems]);
    //total amounts
    useEffect(()=>{
        const newcartCount = cartItems.reduce((callbackTotal,cartItem)=>{
            return callbackTotal + cartItem.quantity
        },0)////reduce?????
        setcartCount(newcartCount);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        //setitem change states
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    const removeItemfromCart = (productToRemove) =>{
        setCartItems(rmCartItem(cartItems,productToRemove));
    }
    const ClearitemfromCart = (productToClear) => {
        setCartItems(ClearCartItem(cartItems,productToClear))
    }
    //mvc model clear返回新数据，然后set改变数据层面后刷新改变view
    

    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,removeItemfromCart,ClearitemfromCart,cartCount,cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}