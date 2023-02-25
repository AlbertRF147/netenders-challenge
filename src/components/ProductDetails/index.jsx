import React from 'react'
import './productDetails.less'

function ProductDetails(props) {
  const { name, stock, sizes, price } = props
  const getSizesValue = (sizes) => {
    const [firstSize] = sizes
    const [lastSize] = [...sizes].reverse()
    return `${firstSize} - ${lastSize}`
  }
  return (
    <div className='product-details'>
      <h2 className='product-details__name'>{name}</h2>
      <div className='product-details__wrapper'>
        <div className='left'>
          <div className='price'>
            <div className='price-value'>{price}</div>
            <div className='price-currency'>€</div>
          </div>
        </div>
        <div className='right'>
          <div className='stock'>
            <div className='label'>Stock</div>
            <div className='value'>{stock}</div>
          </div>
          <div className='sizes'>
            <div className='label'>Sizes</div>
            <div className='value'>{getSizesValue(sizes)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
