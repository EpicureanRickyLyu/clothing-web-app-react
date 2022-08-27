import { Outlet,Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss'
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
const Navigation = () =>(
    <Fragment>
        <div className='navigation-container'>
            <Link className='nav-link-logocontainer' to ='/'>    
                <Crownlogo/>           
            </Link>
            <div className='nav-links-container'>
                <Link className = 'nav-link' to ='/shop'>shop</Link>
                <Link className = 'nav-link' to ='/auth'>signin</Link>
 
            </div>
                
        </div>
        <Outlet/>
    </Fragment>
)

export default Navigation;