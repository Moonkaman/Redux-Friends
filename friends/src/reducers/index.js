import { 
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  GET_FRIEND_START,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from '../actions';

const initialState = {
  isGettingFriends: false,
  error: '',
  friends: [],
  isGettingFriend: false,
  friend: {},
  isAddingFriend: false,
  isDeletingFriend: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FRIENDS_START:
      return {
        ...state,
        isGettingFriends: true,
        error: ''
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
        isGettingFriend: true,
        error: ''
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

    case ADD_FRIEND_START:
      return {
        ...state,
        isAddingFriend: true,
        error: ''
      }

    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAddingFriend: false,
        friends: action.payload
      }

    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isAddingFriend: false,
        error: 'Error'
      }

    case DELETE_FRIEND_START:
      return {
        ...state,
        isDeletingFriend: true,
        error: ''
      }

    case DELETE_FRIEND_SUCCESS: 
      return {
        ...state,
        isDeletingFriend: false,
        friends: action.payload
      }

    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isDeletingFriend: false,
        error: 'Error'
      }

    default:
      return state;
  }
}

export default reducer;