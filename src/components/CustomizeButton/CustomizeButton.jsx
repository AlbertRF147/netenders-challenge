import React from 'react'
import './CustomizeButton.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CustomizeButton(props) {
  const { name, id, color, setError } = props

  const handleOnCustomizeButtonClick = (e) => {
    if (!color.name) {
      setError(true)
      e.preventDefault()
    }
  }

  return (
    <div className='customize-button' onClick={handleOnCustomizeButtonClick}>
      <div className='product-name'>{name}</div>
      <a href={`/customize/${id}/${color.name}`}>
        <button className='button'>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className='button__label'>Customize</span>
        </button>
      </a>
    </div>
  )
}

export default CustomizeButton
