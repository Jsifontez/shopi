import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const {
    closeCheckoutSideMenu,
    isCheckoutSideMenuOpen,
    cartProducts,
    setCartProducts
  } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filterProducts = cartProducts.filter(product => product.id !== id)

    setCartProducts(filterProducts)
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

      <section>
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
    </aside>
  )
}

export default CheckoutSideMenu
