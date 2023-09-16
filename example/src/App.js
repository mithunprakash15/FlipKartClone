import { Category } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import './Assets/Global.css'
import Items from './Components/Items';
import ElectronicsCard from './Components/ElectronicsCard';
import SearchProduct from './Components/SearchProduct';
import { useState } from 'react';
import ProductPage from './Components/ProductPage';
import DetailedProduct from './Components/DetailedProduct';
import { CartProvider } from './CartContext';
import CartPage from './Components/CartPage';
function App() {
  const [searchClicked ,setSearchClicked] = useState(false);
  const [searchContent , setsearchContent] = useState('');
  const [detailedId , setdetailedId] = useState();
  const [cartClick,setCartClick] = useState(false);
 
  const handleProductPageClick = (name) => {
    setdetailedId(name);
    setSearchClicked(false);
    setsearchContent(''); 
  };
  const handleLogoClick = () => {
    setdetailedId(null); 
    setSearchClicked(false);
    setsearchContent('');
  };
  const handleCartClick = () => {
    setCartClick(true); 
  };
  return (
    <CartProvider>
    <div className='bg'>
      <Header handleLogoClick={handleLogoClick} setSearchClicked={setSearchClicked} setsearchContent={setsearchContent}  handleCartClick={handleCartClick} />
      <Items />{ cartClick? <CartPage /> :
      detailedId ? <DetailedProduct id={detailedId} /> :
      searchClicked ? <ProductPage name={searchContent} setdetailedId={handleProductPageClick}/> : <ElectronicsCard />
      }
    </div>
    </CartProvider>
  );
}

export default App;
