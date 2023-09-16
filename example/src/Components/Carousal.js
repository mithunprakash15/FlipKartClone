import React, { useState } from 'react';
import '../Assets/Global.css';

const Carousel = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % (products.length - 2)
    );
  };
  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

 
 

  return (
    <div>
    <div className="carousel-buttons">
        
      <button className="carousel-button prev-button" onClick={handlePrev}>
     &lt;
                </button>
        </div>
    <div className="simple-carousel">
    
      <div className="carousel-content">
        {products.slice(startIndex, startIndex + 3).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h5 className="name">{product.name}</h5>
            <p className="price">₹{product.price}</p>
            <h6 className="type">{product.product}</h6>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        
      <button className="carousel-button next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
