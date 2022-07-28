import React from 'react';

const NavLinks = (props) => {
  return (
    <li className='nav-item'>
        <a className='nav-link' href={props.href}>{props.linkTitle}</a>
    </li>
  );
}

export default NavLinks;