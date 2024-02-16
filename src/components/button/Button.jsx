import React from 'react'
import './button.scss'

const Button = ({ children, className, onClick }) => {
	return <button onClick={onClick ? () => onClick() : null} className={`btn ${className}`}>{children}</button>
}

export const OutlineButton = ({ children, className, onClick }) => {
  return <button onClick={onClick ? () => onClick() : null} className={`btn btn__outline ${className}`}>{children}</button>
}


export default Button
