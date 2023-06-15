import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'
import { ShoppingCartContext } from '../../context'

function MyOrder () {
  const { order } = useContext(ShoppingCartContext)
  return (
    <>
      <h1>MyOrder</h1>
      <section className='mt-5'>
        <ul>
          {order?.slice(-1)[0].products.map(product => (
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
