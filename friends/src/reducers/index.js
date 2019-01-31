import { 
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE
} from '../actions';

const initialState = {
  isGettingFriends: false,
  error: '',
  friends: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FRIENDS_START:
      return {
        ...state,
        isGettingFriends: true
      }

    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        isGettingFriends: false,
        friends: action.payload
      }

    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        isGettingFriends: false,
        error: 'Error'
      }

    default:
      return state;
  }
}

export default reducer;