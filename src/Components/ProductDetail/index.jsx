import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import './styles.css'

const ProductDetail = () => {
  const { closeProductDetail } = useContext(ShoppingCartContext)

  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6'>
      <section className='flex justify-between items-center'>
        <h3 className='font-medium text-xl'>Detail</h3>
        <button onClick={closeProductDetail}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </section>
    </aside>
  )
}

export default ProductDetail
