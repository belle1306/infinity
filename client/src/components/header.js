import React from "react";
import { NavLink } from "react-router-dom";

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
            <li>
              <a href='/'>Planets</a>
            </li>
            <li>
              <a href='/apod'>Latest from NASA</a>
            </li>
            <li>
            {/* <div>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/message"
            >
              Send message
            </NavLink>
            </div> */}
              <a href='/message'>Send message</a>
              {/* <Link to="/message">Message</Link> */}
            </li>
            <li className='btn'>
              <a href='/'>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
