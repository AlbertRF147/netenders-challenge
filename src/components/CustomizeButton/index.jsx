import React from 'react'
import './customizeButton.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CustomizeButton(props) {
  const { name, id, color } = props

  return (
    <div className='customize-button'>
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
