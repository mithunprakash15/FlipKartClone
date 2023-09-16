import {useEffect, useState} from "react"

import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Assets/Global.css'
import Carousel from "./Carousal"




const ElectronicsCard = () => {
    const [products, setProducts] = useState([]);
    const sliderSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }

    useEffect(() => {
        fetch('/Electronics.json').then(response => response.json()).then(data => setProducts(data)).catch(error => console.error('Error fetching data:', error))
    }, []);
    console.log(products)
    return (
        <div className="electonics-card">
        <h4>Best of Electronics<br></br><br></br>
        <button className="button" >View More</button></h4>

        
        <Carousel products={products} />

        
        </div> 
        
    )
}

export default ElectronicsCard
