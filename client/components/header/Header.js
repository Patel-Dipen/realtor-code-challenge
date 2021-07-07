import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default (props) => {
  const { title, logo, firstName } = props

  return (
    <div className='header'>
      <div className='home-logo'>
        <Link to='/eq-zen-garden/home'>
          <img className='resize' src={logo} />
        </Link>
      </div>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='profile-link'>
        <Link to='/eq-zen-garden/profile'>Welcome {firstName}</Link>
      </div>
    </div>
  )
}
