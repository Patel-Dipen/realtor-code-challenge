import React from 'react'
import moment from 'moment'
import './Earthquake.scss'

export default (props) => {
  const { earthquakes, match } = props
  const eq = earthquakes.find((it) => (it.id === match.params.id))

  return (
    <div className='eq-home'>
      <div className='eq-title'>
        <h3>{eq.properties.title}</h3>
      </div>
      <div className='eq-detail'>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td className='detail-color'>{eq.properties.title}</td>
            </tr>
            <tr>
              <td>Magnitude</td>
              <td className='detail-color'>{eq.properties.mag}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td className='detail-color'>{moment(eq.properties.time).format('MMM DD, YYYY, hh:mm A')}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className='detail-color'>{eq.properties.status}</td>
            </tr>
            <tr>
              <td>Tsunami</td>
              <td className='detail-color'>{eq.properties.tsunami}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td className='detail-color'>{eq.properties.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
