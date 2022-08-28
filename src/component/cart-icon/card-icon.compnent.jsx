import './card-icon.scss'
import {ReactComponent as Shopicon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart-context.context'
const Carticon = () =>{
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () =>{
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div onClick={toggleIsCartOpen} className='cart-icon-container'>
            <Shopicon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default Carticon;