import axios from 'axios'

const DEFAULT_STATE = {
  title: '',
  logo: ''
}

// Actions
const SET_SITE_DATA = 'site/SET_SITE_DATA'

// Reducers
const siteReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SITE_DATA:
      return {
        ...state,
        title: action.payload.title,
        logo: action.payload.logoImage
      }
    default:
      return state
  }
}

// Action Creators
const setSiteData = (data) => ({ type: SET_SITE_DATA, payload: data })

export const loadSiteData = () => async (dispatch) => {
  try {
    const result = await axios.get('/eq-zen-garden/api/site')

    dispatch(setSiteData(result.data))
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

export default siteReducer
