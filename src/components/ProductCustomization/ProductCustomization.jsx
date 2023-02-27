import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomizeSizeRow from '../CustomizeSizeRow/CustomizeSizeRow.jsx'
import './ProductCustomization.less'

function ProductCustomization(props) {
  const { id, selectedColorName, sizes, name, image, price } = props
  const [customSize, setCustomSize] = useState({})
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setTotal(() =>
      customSize.quantity ? convertToMoney(customSize.quantity * price) : 0
    )
  }, [customSize, setTotal])

  const handleOnAddToCart = async () => {
    if (id && selectedColorName && customSize.quantity && customSize.size) {
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
  }

  return (
    <div>
      <div className='close' onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <h3>Select a size and quantity:</h3>
      <div className='custom-sizes'>
        {sizes.map((size, index) => (
          <CustomizeSizeRow
            key={size}
            size={size}
            customSize={customSize}
            setCustomSize={setCustomSize}
            isLast={index === sizes.length - 1}
          />
        ))}
      </div>
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
      <button className='add-to-cart' onClick={handleOnAddToCart}>
        Add to cart
        {!total ? <div className='overlay disabled' /> : ''}
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
