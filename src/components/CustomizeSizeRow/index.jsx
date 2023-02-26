import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.less'

function CustomizeSizeRow(props) {
  const { size, customSize, setCustomSize, isLast } = props
  const customSizeIsEmpty = typeof customSize.size === 'undefined'
  const isCustomSize = customSizeIsEmpty || customSize.size === size
  const rowStateClass = customSizeIsEmpty
    ? ''
    : isCustomSize
    ? 'active'
    : 'disabled'
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setCustomSize(quantity ? { size, quantity } : {})
  }, [quantity, setCustomSize])

  const increaseQuantity = () => {
    if (isCustomSize) {
      setQuantity((prev) => prev + 1)
    }
  }
  const decreaseQuantity = () => {
    if (isCustomSize) {
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
    }
  }

  return (
    <div
      className={`size-row ${rowStateClass} ${isLast ? 'size-row--last' : ''}`}
    >
      <div className='size-row__label'>{size}</div>
      <div className='size-row__quantity'>
        <button className='decrease-button' onClick={decreaseQuantity}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div className='quantity'>{quantity}</div>
        <button className='increase-button' onClick={increaseQuantity}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  )
}

export default CustomizeSizeRow
