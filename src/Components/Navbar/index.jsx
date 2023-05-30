import NavItem from './NavItem'

const Navbar = () => {
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
    <nav className='flex justify-between items-center fixed z-2 w-full py-5 px-8 text-sm font-light'>
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

        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
