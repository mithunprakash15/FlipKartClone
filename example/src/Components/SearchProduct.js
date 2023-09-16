import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { fetchProducts } from '../Thunk/Actions/productActions';

const SearchProduct = ({ name, setdetailedId }) => {
  const dispatch = useDispatch();
  const { error, products, loading } = useSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Call the fetchProducts action here
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // Update the state based on the product data received from Redux
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (!loading && products) {
      if (name) {
        const filtered = products.filter((product) =>
          product.category.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [name, products, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div>No products found.</div>;
  }

  const detailIdHandler = (id) => {
    setdetailedId(id);
  };

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className='productcard' onClick={() => detailIdHandler(product)}>
          <div className='product-image'>
            <img className='product-image' src={product.thumbnail} />
          </div>
          <div className='product-info'>
            <h3 className='title'>{product.title}</h3>
            <div className="product-rating">
              <span className="product-rating-icon">&nbsp;{product.rating}<StarIcon />&nbsp;</span>
            </div>
            <ul>
              <li>{product.description}</li>
              <li> {product.category}</li>
              <li> {product.brand}</li>
            </ul>
          </div>
          <div className='product-price'>
            <p className='pricetag'>₹{Math.trunc(product.price *((100 - product.discountPercentage) / 100))}</p>
            <p className='inline-p strikethrough'>₹{product.price}</p>
            <p className='inline-p percent'>{product.discountPercentage}% Off</p>
          </div>
          <div>
            <img height='21' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchProduct;
