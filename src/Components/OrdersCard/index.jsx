import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <li className='flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>15.06.23</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex gap-2 items-center'>
          <span className='font-medium text-2xl'> $ {totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black' />
        </p>
      </div>
    </li>
  )
}

export default OrdersCard
