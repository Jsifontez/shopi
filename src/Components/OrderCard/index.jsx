import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const OrderCard = ({ id, title, imageUrl, price, quantity, handleDelete }) => {
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
        <button>
          <MinusIcon className="h-3 w-3 text-black" />
        </button>

        <span className='w-4 bg-gray-300 text-sm text-center'>{quantity}</span>

        <button>
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
