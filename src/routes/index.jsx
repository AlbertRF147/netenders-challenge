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
    path: '/customize',
    element: <Customize />,
  },
]

export default routes
