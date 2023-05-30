/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

const NavItem = ({ link }) => {
  let Link

  if (link.activatable) {
    Link = <ActivableLink link={link} />
  } else {
    Link = <NavLink to={link.path}> {link.text} </NavLink>
  }

  return (
    <li className={link.className}>
      {Link}
    </li>
  )
}

const ActivableLink = ({ link }) => {
  // this style will be applied to current link selected
  const activeStyle = 'underline underline-offset-4'

  return (
    <NavLink
      to={link.path}
      className={({ isActive }) => isActive ? activeStyle : undefined }
    >
      {link.text}
    </NavLink>
  )
}

export default NavItem
