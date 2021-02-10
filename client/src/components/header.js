import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className='header-inner'>
          <div className='logo'>Infinity.</div>
            <nav>
              <ul>
                <li className='solarscope'>
                  <a href='/solarscope'>Explore Solar System</a>
                </li>
                <li className='apod'>
                  <a href='/apod'>Your astronomical birthday</a>
                </li>
                <li className="message">
                  <a href='/message'>Send message</a>
                </li>
                <li className='quiz'>
                  <a href='/quiz'>Astronomical Quiz</a>
                </li>
                {/* <li className='Message-surprise'>
                  <a href='/MessageSurprise'>Message Surprise</a>
                </li> */}
              </ul>
            </nav>
        </div>
    </header>
  );
}