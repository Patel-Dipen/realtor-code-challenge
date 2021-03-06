import { connect } from 'react-redux'
import Profile from './Profile'

const mapStateToProps = (state) => {
  return { ...state.profile }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
