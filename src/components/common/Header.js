import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const Nav = {transform : 'scale(1.2)', textDecoration: 'underline'}


  return (
<header className={props.type}>
  <div className="inner">
    <h1><NavLink exact to='/'>MINI</NavLink></h1>
    <ul id="gnb">
      <li><NavLink activeStyle={Nav} to='/department'>Department</NavLink></li>
      <li><NavLink activeStyle={Nav} to='/community'>Community</NavLink></li>
      <li><NavLink activeStyle={Nav} to='/gallery'>Gallery</NavLink></li>
      <li><NavLink activeStyle={Nav} to='/youtube'>Youtube</NavLink></li>
      <li><NavLink activeStyle={Nav} to='/location'>Location</NavLink></li>
      <li><NavLink activeStyle={Nav} to='/join'>Membership</NavLink></li>
    </ul>
    <a href="#" className='menuMo'>
      <FontAwesomeIcon icon={faBars} />
    </a>
  </div>
</header>
  )
}

export default Header