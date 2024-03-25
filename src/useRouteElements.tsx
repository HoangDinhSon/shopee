import { useRoutes } from 'react-router-dom'
import ProductList from 'src/pages/ProductList'
import Login from 'src/pages/Login'
import Register from './pages/Register'
import RegisterLayout from 'src/layouts/RegisterLayout'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return routeElement
}
