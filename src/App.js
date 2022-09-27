import './App.css';
import NavBarr from './components/navvv/NavBarr';
import CarouselFadeExample from './components/Slider/CarouselFadeExample';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Products from './components/Product/Products';
import ProductDetails from './components/ProductDetail/ProductDetails.js';
import Fav from './components/Favourite/Fav';

function App() {
  return (
    <>
    <Router>
    <NavBarr />
       <Routes>
         <Route path="/" element={<><CarouselFadeExample /><h1>Welcome Home</h1> </>} />
         <Route path="/home" element={<><CarouselFadeExample /><h1>Welcome Home</h1> </>} />
         <Route path='/products' element={<><Products/></>}/>
         <Route path="/products/:id" exact element={<><ProductDetails/></>}/>
         <Route path="/favs"  element={<><Fav/></>}/>
       </Routes>
    </Router>
    </>
  );
}

export default App;
