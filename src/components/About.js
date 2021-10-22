import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <div>
      <div className='aboutContainer'>
        <div className='aboutSection'>
          <div>
            <h1>About Me</h1>
            <span className='line'></span>
          </div>
          <div>Originally from Canada but living in Seoul, I am a web developer with a passion for design. I love to create beautiful designs using the latest trends. I am also highly motivated to continue to grow and learn in the web development field.</div>
          <button className='copyEmail' data-clipboard-text='dbjowett@gmail.com'>
            Copy Email
          </button>
        </div>
        <div className='photoSection'>
          <img src={require('../images/Passport_L.jpg').default} alt='Portfolio Photo' />
          <svg id='visual' viewBox='0 0 645 600' width='540' height='500' xmlns='http://www.w3.org/2000/svg' version='1.1'>
            <rect x='0' y='0' width='0' height='600' fill='#ffffff'></rect>
            <g transform='translate(391.2271740935551 270.99777235862325)'>
              <path
                d='M110 -152.3C145.2 -125.9 178.2 -97.2 206.4 -56.2C234.6 -15.2 258.1 38.1 239.8 72.9C221.6 107.6 161.6 123.8 114.7 158.6C67.8 193.3 33.9 246.7 -4.1 252.3C-42.1 258 -84.2 216 -104.2 172.4C-124.2 128.9 -122 83.9 -124.3 47.4C-126.5 10.8 -133.1 -17.3 -124.2 -39C-115.2 -60.6 -90.7 -75.8 -67.4 -106.1C-44.1 -136.3 -22 -181.7 7.7 -192.3C37.4 -202.8 74.8 -178.7 110 -152.3'
                fill='#0F1538'></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
