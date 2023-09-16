import React, {useEffect, useState} from 'react';
import StarIcon from '@mui/icons-material/Star';
import ImageGallery from './ImageGallery';
import '../Assets/Global.css';
import {useCart} from '../CartContext';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {LocationOn} from '@mui/icons-material';
import Dialog from '@mui/material/Dialog'; // Import Dialog component
import DialogContent from '@mui/material/DialogContent';
import LoginPop from './LoginPop';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cartProducts } from '../Thunk/Actions/cartActions';
const DetailedProduct = ({id}) => {
    const dispatch = useDispatch();
    const {addToCart} = useCart();
    console.log(id);
    
    const [isAnimating, setIsAnimating] = useState(false);
   
    const [loginDialogOpen, setLoginDialogOpen] = useState(false);
    const log = localStorage.getItem('username');

    const handleAddToCart = () => {
        if(log){
            setIsAnimating(true);
     
            const username = log;
            const cart = {
                productId: id.id,
                numberOfProducts: 1, // You can set the initial quantity here
            };
            dispatch(cartProducts(username, cart));
            
            
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
        else{
                  setLoginDialogOpen(true);
        }
        
    };

    return (
        <div>
            <div className='detail-card'>
                <div className='detailed'>
                    <div className='image-card'>
                        <div className='image-and-button'>

                            <ImageGallery images={
                                id.images
                            }/>
                            <div className='add-to-cart-container'>
                                <button className={
                                        `add-to-cart-button ${
                                            isAnimating ? 'animate' : ''
                                        }`
                                    }
                                    onClick={handleAddToCart}>
                                    {
                                    isAnimating ? 'Added to Cart' : 'Add to Cart'
                                } </button>
                              <Dialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)}>
                                <DialogContent>
                                <LoginPop onClose={() => setLoginDialogOpen(false)} />
                      
                                </DialogContent>
                                </Dialog>
                            
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-d'>
                    <div className='detailed-other'>
                        <p className='do-p'>
                            {
                            id.title
                        }</p>
                        <div className='product-rating'>
                            <span className='product-rating-icon'>&nbsp;{
                                id.rating
                            }<StarIcon/>&nbsp;</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <img height='21' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'/>
                            </div>
                        </div>
                        <div className='product-price'>
                            <p className='pricetag inline-p par'>
                                ₹{
                                Math.trunc(id.price * ((100 - id.discountPercentage) / 100))
                            } </p>
                            <p className='inline-p strikethrough'>₹{
                                id.price
                            }</p>
                            <p className='inline-p percent'>
                                {
                                id.discountPercentage
                            }% Off</p>
                        </div>
                        <ul>
                            <li>About the Product: {
                                id.description
                            }</li>
                            <li>Category of the Product: {
                                id.category
                            }</li>
                            <li>Number of Items in Stock: {
                                id.stock
                            }</li>
                        </ul>
                        <div className='other'>
                            <h5 color='gray'>Available Offers</h5>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Bank Offer</span>&nbsp;&nbsp;Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000
                            </p>
                            <p className='justify-center'>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Bank Offer</span>&nbsp;&nbsp;Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000
                            </p>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Bank Offer</span>&nbsp;&nbsp;Flat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns, Min Txn Value ₹10,000
                            </p>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Bank Offer</span>&nbsp;&nbsp;Special PriceGet extra 12% off (price inclusive of cashback/coupon)
                            </p>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Bank Offer</span>&nbsp;&nbsp;Extra 10% Off On Computer Accessories on Bought Together
                            </p>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Partner Offer</span>&nbsp;&nbsp;Purchase now & get 1 surprise cashback coupon in Future
                            </p>
                            <p>
                                <LocalOfferIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>Partner Offer</span>&nbsp;&nbsp; Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000
                            </p>

                            <p>
                                <EventAvailableIcon color='success' fontSize='small'/>&nbsp;&nbsp;
                                <span className='bold'>EMI Available</span>&nbsp;&nbsp; EMI starting from ₹528/month
                            </p>

                        </div>
                        <div style={{display:"flex"}}>
                        <h4 style={{marginRight:"20px" , color:"gray"}}>Delivery</h4>
                            <div className='location-second'>
                                <button className='buttonsearch'><LocationOn fontSize='small'/></button>
                                <input placeholder='Enter Delivery Pincode' type='text'></input>
                                <span>Check</span>
                            </div>
                        </div>
                        <div>
                        <img src='https://rukminim2.flixcart.com/lockin/100/100/images/CCO__PP_2019-07-14.png?q=50' style={{marginTop:"15px",margin:"25px"}}/>
                        </div>
                        <div style={{display:"flex" ,justifyContent:"center" ,alignItems:"center"}} >
                        <h4 style={{marginRight:"20px" , color:"gray"}}>Description</h4>
                        <p >{id.description}</p>
                        </div>
                        <div className='specs'> <h4>Specifications</h4>
                        <div style={{display:"flex" ,alignItems:"center"}}>
                        <h5 style={{marginRight:"20px" , color:"gray" , borderBottom:"1px solid gray"}}>Category</h5>
                        <p >{id.category}</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailedProduct;
