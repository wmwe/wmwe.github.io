import React from 'react'
import "./Button.css"
import "../Home.css"

export const Button = ({onClick, children, textColor, buttonColor}) => {
  return (
    <button
    className='wmwe-button'
    style={{color: `${textColor}`, background: `${buttonColor}`}}
    onClick={onClick}>
        {children}
    </button>
  )
}

export default Button;