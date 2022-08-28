import { Outlet,Link} from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import './navigation.styles.scss'
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'//icon
import { SignoutUser } from '../../utilities/firebase.utils';

import Cardicon from '../../component/cart-icon/card-icon.compnent';
import CardDropdown from '../../component/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../context/cart-context.context';
import { Usercontext } from '../../context/user.context';
const Navigation = () =>{

    const {currentUser} = useContext(Usercontext);
    const {isCartOpen} = useContext(CartContext);

    //logout
    //console.log(isCardOpen);

    //const [isdropdown,setisdropdown] = useState(false);
    // const CarddropdownToggle = () =>{
    //     setisdropdown(-isdropdown);
    //     console.log(isdropdown);
    // }
    // useEffect(()=>{
    //     CarddropdownToggle();
    // },[isdropdown]);


    return(
    <Fragment>
        <div className='navigation-container'>
            <Link className='nav-link-logocontainer' to ='/'>    
                <Crownlogo/>           
            </Link>
            
            <div className='nav-links-container'>
                <Link className = 'nav-link' to ='/shop'>shop</Link>
                {
                currentUser ? ( <span onClick={SignoutUser} className='nav-link'>sign out</span>) :
                 (<Link className = 'nav-link' to ='/auth'>signin</Link>)
                }

                <Cardicon/>
            </div>
            {
                isCartOpen ? (<CardDropdown/>) : null
            }
        </div>
        <Outlet/>
    </Fragment>
    )
}

export default Navigation;