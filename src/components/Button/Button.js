import React from 'react'
import "./Button.css"
import "../Home.css"

export const Button = ({onClick, children}) => {
  return (
    <button
    className='wmwe-button'
    onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;