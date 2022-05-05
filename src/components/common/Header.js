import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const Hotpink = {color : '#F01A69', transform : 'scale(1.2)', textDecoration: 'underline'}
  const Purple = {color : '#8B1EF7', transform : 'scale(1.2)', textDecoration: 'underline'}
  const Blue = {color : '#2664E0', transform : 'scale(1.2)', textDecoration: 'underline'}
  const Aqua = {color : '#1EF7D3', transform : 'scale(1.2)', textDecoration: 'underline'}
  const  Lightgreen = {color : '#4EF046', transform : 'scale(1.2)', textDecoration: 'underline'}
  const Yellow = {color :'#FFF101', transform : 'scale(1.2)', textDecoration: 'underline'}

  return (
<header className={props.type}>
  <div className="inner">
    <h1><NavLink exact to='/'>MINI</NavLink></h1>
    <ul id="gnb">
      <li><NavLink activeStyle={Hotpink} to='/department'>Department</NavLink></li>
      <li><NavLink activeStyle={Purple} to='/community'>Community</NavLink></li>
      <li><NavLink activeStyle={Blue} to='/gallery'>Gallery</NavLink></li>
      <li><NavLink activeStyle={Aqua} to='/youtube'>Youtube</NavLink></li>
      <li><NavLink activeStyle={Lightgreen} to='/location'>Location</NavLink></li>
      <li><NavLink activeStyle={Yellow} to='/join'>Membership</NavLink></li>
    </ul>
    <a href="#" className='menuMo'>
      <FontAwesomeIcon icon={faBars} />
    </a>
  </div>
</header>
  )
}

export default Header