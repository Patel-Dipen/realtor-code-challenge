import React from 'react'
import './Profile.scss'

export default (props) => {
  const { firstName, lastName, email, phoneNum, bio, avatar } = props

  return (
    <div className='profile-page'>
      <div className='profile-title'>
        <h3>Profile</h3>
      </div>
      <div className='profile'>
        <div className='profile-image'>
          <img className='profile-pic' src={avatar} />
        </div>
        <div className='profile-info'>
          <table>
            <tbody>
              <tr className='no-wrap'>
                <td>First Name</td>
                <td className='detail-color'>{firstName}</td>
              </tr>
              <tr className='no-wrap'>
                <td>Last Name</td>
                <td className='detail-color'>{lastName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className='detail-color'>{phoneNum}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className='detail-color'>{email}</td>
              </tr>
              <tr>
                <td className='bio-position'>Bio</td>
                <td className='detail-color bio'>{bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
