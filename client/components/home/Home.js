import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Home.scss'

export default (props) => {
  const { title, earthquakes } = props
  const [earthquakeArr, setEarthquakeArr] = useState(earthquakes)
  const [isTitleAscending, setIsTitleAscending] = useState(true)
  const [isMagAscending, setIsMagAscending] = useState(true)
  const [isTimeAscending, setIsTimeAscending] = useState(true)

  useEffect(() => {
    if (earthquakes) setEarthquakeArr([...earthquakes])
  }, [earthquakes])

  const sortEqArray = (sortBy, isAscending) => {
    const sortedArray = [...earthquakes]
    sortedArray.sort((a, b) => {
      if (a.properties[sortBy] < b.properties[sortBy]) return -1
      if (a.properties[sortBy] > b.properties[sortBy]) return 1
      return 0
    })

    if (!isAscending) sortedArray.reverse()

    setEarthquakeArr([...sortedArray])

    if (sortBy === 'mag') {
      setIsMagAscending(!isAscending)
    }

    if (sortBy === 'title') {
      setIsTitleAscending(!isAscending)
    }

    if (sortBy === 'time') {
      setIsTimeAscending(!isAscending)
    }
  }

  return (
    <div className='home'>
      <div className='home-title'>
        <h3>{title}</h3>
      </div>
      <div className='eq-details'>
        <table>
          <thead>
            <tr>
              <th onClick={() => { sortEqArray('title', isTitleAscending) }}>Title</th>
              <th onClick={() => { sortEqArray('mag', isMagAscending) }}>Magnitude</th>
              <th onClick={() => { sortEqArray('time', isTimeAscending) }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              earthquakeArr.map((it) =>
                <tr key={it.id}>
                  <td><Link to={`/eq-zen-garden/earthquake/${it.id}`}>{it.properties.title}</Link></td>
                  <td className='cell-center'>{it.properties.mag}</td>
                  <td>{moment(it.properties.time).format('MMM DD, YYYY, hh:mm A')}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
