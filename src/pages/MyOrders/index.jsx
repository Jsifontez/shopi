import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders () {
  const { orders } = useContext(ShoppingCartContext)
  return (
    <>
      <h1 className='font-medium text-xl'>MyOrders</h1>

      {orders.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  )
}

export default MyOrders
