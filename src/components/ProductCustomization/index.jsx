import React, { useEffect, useState } from 'react'
import CustomizeSizeRow from '../CustomizeSizeRow'
import './styles.less'

function ProductCustomization(props) {
  const { id, selectedColorName, sizes, name, image, price } = props
  const [customSize, setCustomSize] = useState({})
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(() =>
      customSize.quantity ? convertToMoney(customSize.quantity * price) : 0
    )
  }, [customSize, setTotal])

  const handleOnAddToCart = async () => {
    const res = await fetch('http://www.example.com/jsonservice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: {
          id,
          color_name: selectedColorName,
        },
        custom_product: {
          quantity: customSize.quantity,
          size: customSize.size,
        },
      }),
    })
    return await res.json()
  }

  return (
    <div>
      <h3>Select a size and quantity:</h3>
      {sizes.map((size, index) => (
        <CustomizeSizeRow
          key={size}
          size={size}
          customSize={customSize}
          setCustomSize={setCustomSize}
          isLast={index === sizes.length - 1}
        />
      ))}
      <hr />
      <div className='customize-details'>
        <img src={image} alt='Product image' />
        <div className='customize-details__product'>
          <h3 className='label'>{name}</h3>
          <div className='price'>
            <div className='price__label'>{price}</div>
            <div className='price__currency'>€</div>
          </div>
        </div>
      </div>
      <hr />
      <div className={`customize-totals ${!total ? 'disabled' : ''}`}>
        <div className='customize-totals__quantity'>
          <span className='quantity'>{customSize.quantity || 0}</span>
          <span>Items selected</span>
        </div>
        <div className='total'>
          <div className='total__label'>Total:</div>
          <div className='total__quantity'>{total}</div>
        </div>
      </div>
      <button
        className={`add-to-cart ${!total ? 'disabled' : ''}`}
        onClick={handleOnAddToCart}
      >
        Add to cart
      </button>
    </div>
  )
}

function convertToMoney(value) {
  return new Intl.NumberFormat('es-es', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

export default ProductCustomization
