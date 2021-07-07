import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => {
  return {
    ...state.site,
    firstName: state.profile.firstName
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
