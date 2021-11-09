import React from 'react';
import '../styles/modal.css';

export default function Modal({ onClick }) {
  return (
    <div className='modal'>
      <h3>🎉Email Sent. Thank you!🎉</h3>
      <button className='modalBtn' onClick={onClick}>
        Close
      </button>
    </div>
  );
}
