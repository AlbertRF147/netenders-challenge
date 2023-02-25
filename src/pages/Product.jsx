import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CustomizeButton from '../components/CustomizeButton'
import Page from '../components/Page'
import ProductColors from '../components/ProductColors'
import ProductDetails from '../components/ProductDetails'
import ProductImageSlider from '../components/ProductImageSlider'
import products from '../products.json'

export async function loader({ params }) {
  // In real world we would fetch this from an API most likely
  const [product] = products.filter((product) => product.id === params.id)
  return product
}

function Product() {
  const product = useLoaderData()
  const [color, setColor] = useState({})

  return (
    <Page>
      <div className='product'>
        <ProductImageSlider image={product.image} />
        <ProductDetails {...product} />
        <ProductColors
          colors={product.colors}
          color={color}
          setColor={setColor}
        />
        <CustomizeButton id={product.id} color={color} />
      </div>
    </Page>
  )
}

export default Product
