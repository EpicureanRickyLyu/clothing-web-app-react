import { useContext } from 'react'
import { Productcontext } from '../../context/product.context'
import Shopitem from '../../component/shop-item/shop-item.component';
import './shop.scss'
//id name imageUrl price
const Shop = () =>{
    const {products} = useContext(Productcontext);
    return(
        <div className='products-container'>
           { 
           products.map((product)=>( <Shopitem key={product.id} product = {product}/>))
           }
        </div>
    )
}
export default Shop