import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Page from '../components/Page/Page.jsx'
import ProductCustomization from '../components/ProductCustomization/ProductCustomization.jsx'

function Customize() {
  const { colorName } = useParams()
  const product = useLoaderData()

  return (
    <Page>
      <ProductCustomization {...product} selectedColorName={colorName} />
    </Page>
  )
}

export default Customize
