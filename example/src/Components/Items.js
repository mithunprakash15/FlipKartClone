import React from 'react'
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import Fashion from './ItemDrop/Fashion';
import TwoWheeler from './ItemDrop/TwoWheeler';
import Electronics from './ItemDrop/Electonics';
import Home from './ItemDrop/Home';
import Toys from './ItemDrop/Toys';

function Items() {
    return (
        <div className='items'>
            <div className='item'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>
                <p>Groceries</p>
            </div>
            <div className='item'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>
                <p>Mobile</p>
            </div>
            
                
                <Tippy content={
                        <Fashion></Fashion>
                    }
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <div className='item'>
                    <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>

                    <p className="tp
                                    ">Fashion</p>
               

            </div>
            </Tippy>
            
                <Tippy content={<Electronics/>}
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <div className='item'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>

                    <p className="tp
                                    ">Electonics</p>
              
            </div>
            </Tippy>
           
                <Tippy content={<Home/>}
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <div className='item'>
                    <img src='https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100'
                        style={
                            {
                                height: '64px',
                                width: '64px'
                            }
                        }/>

                    <p className="tp
                                    ">Home & Furniture</p>
               
            </div>
            </Tippy>
            <div className='item'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>
                <p className="tp">Appliances</p>
            </div>
            <div className='item'>
                <img src='https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>
                <p className="tp">Travel</p>
            </div>
            
                <Tippy content={<Toys/>}
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <div className='item'>
                    <img src='https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100'
                        style={
                            {
                                height: '64px',
                                width: '64px'
                            }
                        }/>
                    <p className="tp">Beauty</p>
                
            </div>
            </Tippy>
            
                <Tippy content={<TwoWheeler/>}
                    interactive={true}
                    theme="light"
                    offset={
                        [5, 18]
                    }
                    animation="perspective">
                    <div className='item'>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100'
                    style={
                        {
                            height: '64px',
                            width: '64px'
                        }
                    }/>

                    <p className="tp
                                    ">Mobility</p>
               
            </div>
            </Tippy>

        </div>
    )
}

export default Items
