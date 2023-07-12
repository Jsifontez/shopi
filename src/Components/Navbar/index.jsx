import { useContext, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../context'
import NavItem from './NavItem'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { count } = useContext(ShoppingCartContext)

  const leftLinks = [
    {
      path: '/',
      className: 'font-bold text-lg',
      text: 'Shopi',
      activatable: false
    },
    {
      path: '/',
      className: '',
      text: 'All',
      activatable: true
    },
    {
      path: '/clothes',
      className: '',
      text: 'Clothes',
      activatable: true
    },
    {
      path: '/electronics',
      className: '',
      text: 'Electronics',
      activatable: true
    },
    {
      path: '/furnitures',
      className: '',
      text: 'Furnitures',
      activatable: true
    },
    {
      path: '/toys',
      className: '',
      text: 'Toys',
      activatable: true
    },
    {
      path: '/others',
      className: '',
      text: 'Others',
      activatable: true
    }
  ]

  const rightLinks = [
    {
      path: '/my-orders',
      className: '',
      text: 'My Orders',
      activatable: true
    },
    {
      path: '/my-account',
      className: '',
      text: 'My Account',
      activatable: true
    },
    {
      path: '/sing-in',
      className: '',
      text: 'Sign In',
      activatable: true
    }
  ]

  return (
    <nav className='fixed z-10 w-full py-5 px-8 top-0'>
      <div className='flex justify-between items-center w-full navbar--desktop'>
        <ul className='flex items-center gap-3'>
          {leftLinks.map(link => (
            <NavItem key={link.text} link={link} />
          ))}
        </ul>

        <ul className='flex items-center gap-3'>
          <li className='text-black/60'>
            juan.sifontez.dev@gmail.com
          </li>

          {rightLinks.map(link => (
            <NavItem key={link.text} link={link} />
          ))}

          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'/>
            <span>{count}</span>
          </li>
        </ul>
      </div>

      <div className='navbar--mobile w-full fixed top-0 left-0 bg-white'>
        {!isNavOpen
          ? (
            <Bars3Icon
              className="h-7 w-7 text-black cursor-pointer fixed top-5 left-8 bg-white rounded-full p-1"
              onClick={() => setIsNavOpen(true)}
            />
            )
          : (
            <XMarkIcon
              className="h-6 w-6 text-black cursor-pointer fixed top-5 left-8"
              onClick={() => setIsNavOpen(false)}/>
            )
        }
        {isNavOpen && (
          <div className='flex w-full h-full py-12 justify-center'>
            <ul className='flex flex-col items-center gap-3'>
              {leftLinks.map(link => (
                <NavItem key={link.text} link={link} />
              ))}

              {rightLinks.map(link => (
                <NavItem key={link.text} link={link} />
              ))}
            </ul>
          </div>
        )}
        <div className='flex items-center fixed top-5 right-4 bg-white p-2 rounded-full'>
          <ShoppingBagIcon className='h-6 w-6 text-black'/>
          <span>{count}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
