// import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <li className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>15.06.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </li>
  )
}

export default OrdersCard
