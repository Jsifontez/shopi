import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCartContext } from '../../context'

function MyOrder () {
  const { orders } = useContext(ShoppingCartContext)
  const { id } = useParams()
  const index = id || orders?.length - 1

  return (
    <>
      <div className='flex items-center justify-center w-80 relative'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black' />
        </Link>
        <h1 className='font-medium text-xl'>MyOrder</h1>
      </div>

      <section className='mt-5'>
        <ul>
          {orders?.[index].products.map(product => (
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
