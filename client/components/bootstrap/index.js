import { connect } from 'react-redux'
import BootstrapData from './BootstrapData'
import { loadSiteData } from '../../dux/site'
import { loadProfileData } from '../../dux/profile'
import { loadEarthquakeData } from '../../dux/earthquake'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSiteData: () => dispatch(loadSiteData()),
    loadProfileData: () => dispatch(loadProfileData()),
    loadEarthquakeData: () => dispatch(loadEarthquakeData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BootstrapData)
