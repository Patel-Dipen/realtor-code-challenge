import { connect } from 'react-redux'
import Earthquake from './Earthquake'

const mapStateToProps = (state) => {
  return { earthquakes: state.earthquake.earthquakes }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Earthquake)
