import React from 'react'
import { hot } from 'react-hot-loader/root'
import BootstrapData from './components/bootstrap'
import Routes from './components/routes/Routes'

const App = () => (
  <div className='grid-container'>
    <BootstrapData>
      <Routes />
    </BootstrapData>
  </div>
)

export default hot(App)
