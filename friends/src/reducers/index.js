import { 
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  GET_FRIEND_START,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAILURE
} from '../actions';

const initialState = {
  isGettingFriends: false,
  error: '',
  friends: [],
  isGettingFriend: false,
  friend: {}
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

    case GET_FRIEND_START:
      return {
        ...state,
        isGettingFriend: true
      }

    case GET_FRIEND_SUCCESS:
      return {
        ...state,
        isGettingFriend: false,
        friend: action.payload
      }

    case GET_FRIEND_FAILURE:
      return {
        ...state,
        isGettingFriend: false,
        error: 'Error'
      }

    default:
      return state;
  }
}

export default reducer;