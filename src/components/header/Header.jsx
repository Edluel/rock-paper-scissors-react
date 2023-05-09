import React from 'react'
import logo from '../../assets/images/logo-bonus.svg'
import './header.css'

export default function Header() {
  return (
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>
        <div className="header-score">
            <p>
                12
            </p>
    
        </div>
    </div>
  )
}
