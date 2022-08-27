
import Home from './routes/home/home.components';
import { Route,Routes} from 'react-router-dom';// use url to render
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
//new component
const Shop = () =>{
  return(
    <h1>
      shop page!!!!!!!
    </h1>
  )
}

//叠在一起，两个component
const App = () => {
  return(
    <Routes>
      <Route path='/' element = {<Navigation />}>

        <Route index element ={<Home />}></Route>
        <Route path='shop' element = {<Shop/>}></Route>
        <Route path='auth' element = {<Authentication/>}></Route>
     
      </Route>

    </Routes>
  );
};

export default App;
