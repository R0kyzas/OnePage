import React from 'react';
import NavLinks from '../Hero/NavLinks';

const Navigation = () => {
  return (
    <nav class='navbar navbar-expand-lg'>
      <div class='collapse navbar-collapse justify-content-end'>
        <ul class='navbar-nav mr-auto d-flex align-items-center justify-content-between'>
          <NavLinks href='#' linkTitle='Home'/>
          <NavLinks href='#' linkTitle='About'/>
          <NavLinks href='#' linkTitle='Services'/>
          <NavLinks href='#' linkTitle='Portfolio'/>
          <NavLinks href='#' linkTitle='Team'/>
          <NavLinks href='#' linkTitle='Pricing'/>
          <li class='nav-item dropdown'>
            <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Drop Down
            </a>
            <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a class='dropdown-item' href='#'>Action</a>
              <a class='dropdown-item' href='#'>Another action</a>
              <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>Something else here</a>
            </div>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>Contact</a>
          </li>
          <button class='btn btn-primary nav-button' type='submit'>Get Started</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;