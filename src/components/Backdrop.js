import React from 'react';
import '../styles/modal.css';

export default function Backdrop({ onClick }) {
  return <div className='backdrop' onClick={onClick} />;
}
