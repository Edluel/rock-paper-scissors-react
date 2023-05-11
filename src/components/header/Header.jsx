import React from 'react'
import logo from '../../assets/images/logo-bonus.svg'
import './header.css'

export default function Header(props) {
  const {score} = props;


  return (
    <div className="header">
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>
        <div className="header-score">
            <h4>S C O R E</h4>
            <p>{score}</p>
        </div>
    </div>
  )
}
