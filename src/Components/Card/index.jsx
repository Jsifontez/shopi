import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

const Card = ({ product }) => {
  const {
    setCount,
    openProductDetail,
    closeProductDetail,
    setProdcutToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    openProductDetail()
    setProdcutToShow(productDetail)
  }

  const addProductToCart = (ev, product) => {
    ev.stopPropagation()
    setCount(count => count + 1)
    closeProductDetail()

    setCartProducts(products => [...products, { ...product, quantity: 1 }])
    openCheckoutSideMenu()
  }

  const cardIcon = (id) => {
    const isInCart = cartProducts.some(
      productCart => productCart.id === id
    )

    if (isInCart) {
      return (
        <button
        className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
      >
        <CheckIcon className='w-6 h-6 text-white' />
      </button>
      )
    }

    return (
      <button
        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={(ev) => addProductToCart(ev, product)}
      >
        <PlusIcon className='w-6 h-6 text-black' />
      </button>
    )
  }

  return (
    <article
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(product)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span
          className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
        >
          {product.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={product.images[0]}
          alt={product.description}
        />
        {cardIcon(product.id)}
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </article>
  )
}

export default Card
