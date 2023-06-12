import { useContext } from 'react'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

const OrderCard = ({ id, title, imageUrl, price, quantity, handleDelete }) => {
  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext)

  const increaseProduct = (productId) => {
    const newProducts = [...cartProducts]
    const productIndex = newProducts.findIndex(
      product => product.id === productId
    )

    newProducts[productIndex].quantity++

    setCartProducts(newProducts)
  }

  const decreaseProduct = (productId) => {
    const newProducts = [...cartProducts]
    const productIndex = newProducts.findIndex(
      product => product.id === productId
    )

    if (newProducts[productIndex].quantity > 1) {
      newProducts[productIndex].quantity--
      setCartProducts(newProducts)
    }
  }
  return (
    <li className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 m-0'>
          <img className='h-full w-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <div className='flex flex-col'>
          <p className='text-lg font-medium'>${price}</p>
          <p className='text-sm font-light'>{title}</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        <button onClick={() => decreaseProduct(id)}>
          <MinusIcon className="h-3 w-3 text-black" />
        </button>

        <span className='w-4 bg-gray-300 text-sm text-center'>{quantity}</span>

        <button onClick={() => increaseProduct(id)}>
          <PlusIcon className="h-3 w-3 text-black" />
        </button>

        <button onClick={() => handleDelete(id)}>
          <TrashIcon className="h-4 w-4 text-black" />
        </button>
      </div>
    </li>
  )
}

export default OrderCard
