import React from 'react'
import style from './Modal.module.scss'


function Modal() {
  return (
    <div style={{position: "fixed", width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.2)', display: "flex", justifyContent: 'center', alignItems: 'center'}}>Modal</div>
  )
}

export default Modal