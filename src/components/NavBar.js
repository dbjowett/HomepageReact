import React from 'react';
import '../styles/navBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul className='navlist'>
        <h5>Daniel Jowett</h5>
        <li>
          <a href='https://github.com/dbjowett'>github</a>
        </li>
        <li>
          <a href='#projects'>projects</a>
        </li>
        <div className='contact'>
          <button>contact</button>
          <ul>
            <li>
              <a href='#'>Email</a>
            </li>
            <li>
              <a href='#'>Phone</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}
