import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'
import { totalPice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const {
    closeCheckoutSideMenu,
    isCheckoutSideMenuOpen,
    cartProducts,
    setCartProducts,
    setOrders,
    setCount
  } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter(product => product.id !== id)

    setCartProducts(filterProducts)
    setCount(filterProducts.length)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '06-12-2023',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPice(cartProducts)
    }

    setOrders(order => [...order, orderToAdd])
    setCartProducts([])
    setCount(0)
    closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white p-4 overflow-auto`}
    >
      <header className='flex justify-between items-center mb-5'>
        <h3 className='font-medium text-xl'>My Order</h3>
        <button onClick={closeCheckoutSideMenu}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </header>

      <section className='flex-1'>
        <ul>
          {cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              quantity={product.quantity}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </section>

      <footer>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-xl'>
            ${totalPice(cartProducts)}
          </span>
        </p>

        <Link to='/my-orders/last'>
          <button
            className='w-full bg-black text-white py-3 rounded-lg'
            onClick={handleCheckout}>
              Checkout
            </button>
        </Link>
      </footer>
    </aside>
  )
}

export default CheckoutSideMenu
