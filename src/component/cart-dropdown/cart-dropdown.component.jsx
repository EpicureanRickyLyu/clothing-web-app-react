import './cart-dropdown.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context.context';
import Button from '../cutombutton/custombutton.component';
import Cartitem from '../cart-item/cart-item.component';

const CartDropdown =()=>{
    const {cartItems} = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item)=>{return <Cartitem key={item.id} cartItem = {item}></Cartitem>})
                }
            </div>
            <Button >check out</Button>
        </div>
    )
}

export default CartDropdown;