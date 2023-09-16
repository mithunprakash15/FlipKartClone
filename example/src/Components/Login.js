import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";
import { useState,useEffect } from "react";
import Dialog from '@mui/material/Dialog'; // Import Dialog component
import DialogContent from '@mui/material/DialogContent';
import RegisterPop from "./Registerpop";

import '../Assets/Global.css'

const LoginT = () => {
  const [username , setUsername] = useState('')
  const [registerDialogOpen, setregisterDialogOpen] = useState(false);
  useEffect(() => {
        
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const localHandler = () =>{
    localStorage.removeItem('username');
    setUsername('')
  }
  return (
    <div className="logint">
    {username? (<div><div className="logint-i">
   
    <p onClick={localHandler}>Logout</p>
  </div>
  <hr />
  </div>) :(<div><div className="logint-i">
    <h2>New customer</h2>
    <p onClick={()=>{setregisterDialogOpen(true)}}>Signup</p>
    <Dialog open={registerDialogOpen} onClose={()=>{setregisterDialogOpen(false)}}>
          <DialogContent>
          <RegisterPop  />

          </DialogContent>
          </Dialog>
  </div>
  <hr />
  </div>)}
      
      <div className="logint-in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint-in">
        <img
          width="20"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
          alt=""
        />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className="logint-in">
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logint-in">
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint-in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint-in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginT;