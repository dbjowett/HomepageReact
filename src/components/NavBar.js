import React from 'react';
import '../styles/navBar.css';

export default function NavBar() {
  return (
    <nav id='nav'>
      <ul className='navlist'>
        <li>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/dbjowett'>
            github
          </a>
        </li>
        <li>
          <a href='#projects'>projects</a>
        </li>
        <li>
          <a href='#contact'>contact</a>
        </li>
      </ul>
    </nav>
  );
}
