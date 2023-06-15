import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCartContext } from '../../context'

function MyOrder () {
  const { orders } = useContext(ShoppingCartContext)
  return (
    <>
      <div className='flex items-center justify-center w-80 relative'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black' />
        </Link>
        <h1>MyOrders</h1>
      </div>

      <section className='mt-5'>
        <ul>
          {orders?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

export default MyOrder
