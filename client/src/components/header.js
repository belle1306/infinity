import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Infinity.</div>
        <nav>
          <ul>
            <li className='discover'>
              <a href='/'>discover</a>
            </li>
            {/* <li>
              <a href='/'>Planets</a>
            </li>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li> */}
            <li className='btn'>
              <a href='/'>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
