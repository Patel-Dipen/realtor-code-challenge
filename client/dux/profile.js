import axios from 'axios'

const DEFAULT_STATE = {
  avatar: '',
  firstName: '',
  lastName: '',
  phoneNum: '',
  email: '',
  bio: ''
}

// Actions
const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA'

// Reducers
const profileReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        avatar: action.payload.avatarImage,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNum: action.payload.phone,
        email: action.payload.email,
        bio: action.payload.bio
      }
    default:
      return state
  }
}

// Action Creators
const setProfileData = (data) => ({ type: SET_PROFILE_DATA, payload: data })

export const loadProfileData = () => async (dispatch) => {
  try {
    const result = await axios.get('/eq-zen-garden/api/profile')

    dispatch(setProfileData(result.data))
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

export default profileReducer
