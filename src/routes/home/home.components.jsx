
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CatagorieList from '../../component/catagorie_list/catagorie-list.component';

const Home = () =>
{
    const [shoplist,setitemtype] = useState([]);

    //get json to shoplist
    useEffect(()=>{
    const add  = require('./myjson.json');
    setitemtype(add);
    },[])
    
    return(
        <div>
            <CatagorieList shoplist = {shoplist}/>
        </div>
    )
    //outlet决定router的位置
}

export default Home;