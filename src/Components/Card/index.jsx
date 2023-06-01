import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const Card = ({ product }) => {
  const { setCount } = useContext(ShoppingCartContext)

  return (
    <article className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
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
        <span
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => setCount(count => count + 1)}
        >
          +
        </span>
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </article>
  )
}

export default Card
