import React from 'react'
import './ProductImageSlider.less'

function ProductImageSlider(props) {
  const { image } = props
  return (
    // This would be a slider if I had more time
    <div className='product-image-slider'>
      <img src={image} alt='product image' />
    </div>
  )
}

export default ProductImageSlider
