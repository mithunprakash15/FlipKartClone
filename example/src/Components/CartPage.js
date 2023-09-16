import React from 'react';
import {useCart} from '../CartContext';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';

const CartPage = () => {
    const {cartItems} = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + (Math.trunc(item.price * ((100 - item.discountPercentage) / 100))), 0);
    const totalp = cartItems.reduce((total, item) => total + item.price, 0);
    const discountPrice = totalp - totalPrice;
    const username = localStorage.getItem('username')
    

    return (
      <div className='flexitem'>
        <div className="cart-page">

            <div className="cart-items">
                {
                cartItems.map((item, index) => (
                    <div key={
                            item.id
                        }
                        className="product-cart">
                        <div className="product-image">
                            <img className="product-image"
                                src={
                                    item.thumbnail
                                }
                                alt={
                                    item.title
                                }/>
                        </div>
                        <div className="product-info">
                            <h3 className="title">
                                {
                                item.title
                            }</h3>
                            <p className='des'>
                                {
                                item.description
                            }</p>
                            <div className='product-price'>
                                <p className='pricetag inline-p par'>
                                    ₹{
                                    Math.trunc(item.price * ((100 - item.discountPercentage) / 100))
                                } </p>
                                <p className='inline-p strikethrough'>₹{
                                    item.price
                                }</p>
                                <p className='inline-p percent'>
                                    {
                                    item.discountPercentage
                                }% Off</p>
                            </div>
                        </div>
                    </div>
                ))
            } </div>
            
        </div>
        <div className="total-price">
        <div className='hi'>
                <span className='mar'>
                    PRICE DETAILS
                </span>
                </div>
                <div className='bor'>
                    <p className='inline-p'>Price</p>
                    <p className='inline-p'>
                        {totalPrice}</p>
                </div>
                <div className='bor'>
                    <p className='inline-p green'>Discounted</p>
                    <p className='inline-p'>
                        {discountPrice}</p>
                </div>
                <div>
                    <p className='inline-p' >Delivery</p>
                    <p className='inline-p' style={{color:"green"}}>
                        Free</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
