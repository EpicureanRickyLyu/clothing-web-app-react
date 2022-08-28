import './cart-item.scss'
const Cartitem = ({cartItem}) =>{
    const {name,imageUrl,price,quantity} = cartItem;
    return(
        <div className='cart-item-container'>
            <img src ={imageUrl} alt = {`clothy type ${name}`}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )

}
export default Cartitem;