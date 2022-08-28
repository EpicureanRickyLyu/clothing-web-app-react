import './checkout-item.styles.scss'
import { CartContext } from '../../context/cart-context.context';
import { useContext } from 'react';
const CheckoutItem = ({cartItem}) =>{
    const {name,imageUrl,price,quantity}  = cartItem;
    const {addItemToCart,removeItemfromCart,ClearitemfromCart} = useContext(CartContext)

    const clearItem = () =>{ClearitemfromCart(cartItem)}
    const addItem = () =>{addItemToCart(cartItem)}
    const rmItem = () =>{removeItemfromCart(cartItem)}
    //custom funtion if context function change --> we dont need to find inside html
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt = {`cloth type ${name}`}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={rmItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={clearItem} className="remove-button">&#10005;</div>
        </div> //使用onclick（additemtocart（））会直接执行死循环
    )
    
}

export default CheckoutItem;