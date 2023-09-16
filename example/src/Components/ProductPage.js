import React from 'react'
import SearchProduct from './SearchProduct'

const ProductPage= ({name , setdetailedId}) => {
  return (
    <div className='product-page' >
    <div className='filter-page'>Filter area</div>
    <SearchProduct name={name} setdetailedId={setdetailedId}/>
    </div>
  )
}

export default ProductPage

