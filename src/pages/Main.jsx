import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../components/Page'

function Main() {
  return (
    <Page>
      <h3>This is the index page</h3>
      <p>Go to product page to see some work:</p>
      <ul>
        <li>
          <Link to='product/1'>Product page</Link>
        </li>
      </ul>
    </Page>
  )
}

export default Main
