import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Navbar.less'

function Navbar() {
  return (
    <nav className='navbar'>
      <button className='navbar__burger'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img
        src='https://www.netenders.com/wp-content/uploads/2022/06/netenders-logo.webp'
        alt='Netenders logo'
        className='navbar__logo'
      />
      <button className='navbar__search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </nav>
  )
}

export default Navbar
