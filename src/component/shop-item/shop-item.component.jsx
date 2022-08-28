import { useContext } from 'react';
import { CartContext } from '../../context/cart-context.context';
import Button from '../cutombutton/custombutton.component'
import './product-card.styles.scss'
//product : id,name,imgaeUrl,price
const Shopitem = ({product}) =>{
    const {name,imageUrl,price} = product;
    const {addItemToCart} = useContext(CartContext)

    const addProducttoCart = () =>{addItemToCart(product)}

    return(
        <div className='product-card-container'>
                        <img src={imageUrl} 
                        alt = {`clothing type ${name}`}/>
                        <div className='footer'>
                        <p className='name'>{name}</p>
                        <p className='price'>{price}</p>
                        </div>
                        <Button buttontype="inverted" onClick = {addProducttoCart}>ADD TO CART</Button>
                    {/* <div alt = {item.name} style={{backgroundImage :`url(${item.imageUrl})`}}></div> */} 
        </div>
    )
}
export default Shopitem;