import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { useState, useRef, useEffect } from 'react';

function Header(props) {
  const menu = useRef(null);
  const Nav = { transform: 'scale(1.2)', textDecoration: 'underline' };
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle ? menu.current.open() : menu.current.close();
  }, [toggle]);


  return (
    <>
      <header className={props.type}>
        <div className='inner'>
          <h1>
            <NavLink activeStyle={Nav} exact to='/'>
              MINI
            </NavLink>
          </h1>

          <ul id='gnb'>
            <li>
              <NavLink activeStyle={Nav} to='/department'>
                Department
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={Nav} to='/community'>
                Community
              </NavLink>
            </li>
            <li>
            <NavLink activeStyle={Nav} to='/gallery'>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={Nav} to='/youtube'>
                Youtube
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={Nav} to='/location'>
                Location
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={Nav} to='/join'>
                Join
              </NavLink>
            </li>
          </ul>

          <a href='#' className='menuMo'>
            <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
          </a>
        </div>
      </header>

      <Menu ref={menu} />
    </>
  );
}

export default Header