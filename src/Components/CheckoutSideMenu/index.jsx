import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import './styles.css'

const CheckoutSideMenu = () => {
  const { closeCheckoutSideMenu, isCheckoutSideMenuOpen } = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white p-4`}
    >
      <header className='flex justify-between items-center mb-5'>
        <h3 className='font-medium text-xl'>My Order</h3>
        <button onClick={closeCheckoutSideMenu}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </header>
    </aside>
  )
}

export default CheckoutSideMenu
