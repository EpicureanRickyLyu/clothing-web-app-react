
import Home from './routes/home/home.components';
import { Route,Routes} from 'react-router-dom';// use url to render
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shopPage.component';
import Checkout from './routes/checkout/checkout.component';
//叠在一起，两个component
const App = () => {
  return(
    <Routes>
      <Route path='/' element = {<Navigation />}>

        <Route index element ={<Home />}></Route>
        <Route path='shop' element = {<Shop/>}></Route>
        <Route path='auth' element = {<Authentication/>}></Route>
        <Route path='shop' element = {<Shop/>}></Route>
        <Route path='checkout' element = {<Checkout/>}></Route>
      </Route>

    </Routes>
  );
};

export default App;
