import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CustomizeButton from '../components/CustomizeButton/CustomizeButton.jsx'
import Page from '../components/Page/Page.jsx'
import ProductColors from '../components/ProductColors/ProductColors.jsx'
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx'
import ProductImageSlider from '../components/ProductImageSlider/ProductImageSlider.jsx'
import products from '../products.json'

export async function loader({ params }) {
  // In real world we would fetch this from an API most likely
  const [product] = products.filter((product) => product.id === params.id)
  return product
}

function Product() {
  const product = useLoaderData()
  const [color, setColor] = useState({})
  const [error, setError] = useState(false)

  return (
    <Page>
      <div className='product'>
        <ProductImageSlider image={product.image} />
        <ProductDetails {...product} />
        <ProductColors
          colors={product.colors}
          color={color}
          setColor={setColor}
          setError={setError}
          error={error}
        />
        <CustomizeButton
          id={product.id}
          color={color}
          error={error}
          setError={setError}
        />
      </div>
    </Page>
  )
}

export default Product
