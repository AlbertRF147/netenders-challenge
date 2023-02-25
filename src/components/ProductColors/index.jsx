import React, { useState } from 'react'
import './productColors.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function ProductColors(props) {
  const { colors, color, setColor } = props
  const [expanded, setExpanded] = useState(false)

  const handleOnExpandClick = () => {
    setExpanded((prev) => setExpanded(!prev))
  }

  const handleSelectColor = (color) => {
    setColor({ ...color })
    setExpanded(false)
  }

  return (
    <div className='product-colors'>
      <div
        className={`product-colors__dropdown ${expanded ? 'expanded' : ''}`}
        onClick={handleOnExpandClick}
      >
        <div
          className='selected-color'
          style={{ background: color.color || 'unset' }}
        />
        <div className='label'>
          {!color.name ? 'Select a color:' : color.name}
        </div>
        <div className='icon'>
          {expanded ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </div>
      </div>
      <div
        className='product-colors__list'
        style={{ display: expanded ? 'block' : 'none' }}
      >
        {colors.map((color) => (
          <div
            key={color.name}
            className='color'
            onClick={() => handleSelectColor({ ...color })}
          >
            <div className='circle' style={{ background: color.color }} />
            <div className='label'>{color.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductColors
