import Customize from '../pages/Customize'
import Main from '../pages/Main'
import Product, { loader as productLoader } from '../pages/Product'

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/product/:id',
    element: <Product />,
    loader: productLoader,
  },
  {
    path: '/customize/:id/:colorName',
    element: <Customize />,
    loader: productLoader,
  },
]

export default routes
