import axios from 'axios'

const DEFAULT_STATE = {
  title: '',
  earthquakes: []
}

// Actions
const SET_EARTHQUAKE_DATA = 'earthquake/SET_EARTHQUAKE_DATA'

// Reducers
const earthquakeReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_EARTHQUAKE_DATA:
      return {
        ...state,
        title: action.payload.metadata.title,
        earthquakes: [...action.payload.features]
      }
    default:
      return state
  }
}

// Action Creators
const setEarthquakeData = (data) => ({ type: SET_EARTHQUAKE_DATA, payload: data })

export const loadEarthquakeData = () => async (dispatch) => {
  try {
    const result = await axios.get('/eq-zen-garden/api/earthquake')

    dispatch(setEarthquakeData(result.data))
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

export default earthquakeReducer
