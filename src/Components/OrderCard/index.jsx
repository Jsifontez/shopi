import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ title, imageUrl, price }) => {
  return (
    <li className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 m-0'>
          <img className='h-full w-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <button>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </li>
  )
}

export default OrderCard
