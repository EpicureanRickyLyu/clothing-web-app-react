import { createContext, useState } from "react";
import PRODUCT from '../../src/assets/shop-store.json';

export const Productcontext = createContext({
    products :[],
});

export const ProductProvider = ({children}) => {

    const [products,setproducts] = useState(PRODUCT);
    
    const value = {products};///jsx 变量都要放在curly bracket里面

    return <Productcontext.Provider value = {value}>{children}</Productcontext.Provider>
}