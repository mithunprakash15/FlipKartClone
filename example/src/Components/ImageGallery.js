import React, { useState } from 'react';
import '../Assets/Global.css';

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="image-gallery-container">
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <div className="thumbnail" key={index} onClick={() => handleThumbnailClick(image)}>
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
