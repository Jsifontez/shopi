import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import './styles.css'

const ProductDetail = () => {
  const { closeProductDetail, productToShow } = useContext(ShoppingCartContext)

  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-4'>
      <header className='flex justify-between items-center mb-5'>
        <h3 className='font-medium text-xl'>Detail</h3>
        <button onClick={closeProductDetail}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </header>

      <section>
        <figure className='mb-5'>
          <img
            className='w-full h-full rounded-lg'
            src={productToShow.images[0]}
            alt={productToShow.title}
          />
        </figure>
        <p className='font-medium text-2xl mb-3'>${productToShow.price}</p>
        <p className='font-medium text-md mb-2'>{productToShow.title}</p>
        <p className='font-light text-sm'>{productToShow.description}</p>
      </section>
    </aside>
  )
}

export default ProductDetail
