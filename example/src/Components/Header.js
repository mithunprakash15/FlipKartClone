import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Assets/Global.css'
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import MoreT from './MoreT';
import Login from './Login';
import SearchProduct from './SearchProduct';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Dialog from '@mui/material/Dialog'; // Import Dialog component
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import LoginPop from './LoginPop';
function Header({setSearchClicked , setsearchContent , handleLogoClick , handleCartClick}) {
    const [search , setSearch] = useState();
    const [filled,setFilled] =useState(false);
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    
   const [username , setUsername] = useState('')
    const searchHandler = event =>{
        setsearchContent(event.target.value)
      
    }
    useEffect(() => {
        
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setFilled(true);
          setSearchClicked(true)

        }
      }
      const handleLoginButtonClick = () => {
        setLoginDialogOpen(true); 
      };
      
  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false); 
  };
  
    
    return (
        <div className='header'>
            <div className='header-first' onClick={handleLogoClick}>
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt='flipkart-logo'></img>
                <div className='header-first1'>
                    <span style={
                        {
                            fontSize: '11px',
                            color: 'white',
                            fontStyle: 'italic'
                        }
                    }>Explore</span>
                    <span style={
                        {
                            fontSize: '11px',
                            color: '#f9e107',
                            fontStyle: 'italic'
                        }
                    }>Plus</span>
                    <span>
                        <img width="10" src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png' ></img>
                    </span>
                </div>

            </div>
            <div className='header-second'>
                <input placeholder='Search for Products, Brands and More' type='text' onChange={searchHandler} onKeyDown={handleKeyDown}/>
                <button className='buttonsearch'><SearchIcon/></button>
                
            </div>
            <div className='header-third'>
            {!username?(  <button onClick={handleLoginButtonClick}>
                <Tippy content={
                        <Login></Login>
                    }
                    interactive={true}
                    offset={
                        [5, 20]
                    }
                    theme="light"
                    animation="scale">
                    <span>Login</span>   
                </Tippy>
            </button>) : (<button>
                <Tippy content={
                        <Login></Login>
                    }
                    interactive={true}
                    offset={
                        [5, 20]
                    }
                    theme="light"
                    animation="scale">
                    <span>{username}</span>
                   
                </Tippy>
            </button>)}
         
               
                <Dialog open={loginDialogOpen} onClose={handleLoginDialogClose}>
          <DialogContent>
          <LoginPop onClose={() => setLoginDialogOpen(false)} />

          </DialogContent>
         
        </Dialog>
            </div>
            
            <div className='header-fourth'>
                <Tippy content={
                        <MoreT></MoreT>
                    }
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <p className="tp
                                    ">More</p>
                </Tippy>
                <ExpandMoreIcon/>
            </div>
            <div className='header-fifth' onClick={handleCartClick}>

                <ShoppingCartIcon/>
                <p>Cart</p>
            </div>

        </div>
    )
}

export default Header
