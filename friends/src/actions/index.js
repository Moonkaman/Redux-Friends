import axios from 'axios';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const GET_FRIEND_START = 'GET_FRIEND_START';
export const GET_FRIEND_SUCCESS = 'GET_FRIEND_SUCCESS';
export const GET_FRIEND_FAILURE = 'GET_FRIEND_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const getFriends = _ => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axios.get('http://localhost:5000/api/friends')
    .then(res => dispatch({type: GET_FRIENDS_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}

export const getFriend = id => dispatch => {
  dispatch({ type: GET_FRIEND_START });
  axios.get(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({type: GET_FRIEND_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}

export const addFriend = friend => dispatch => {
  dispatch({type: ADD_FRIEND_START});
  axios.post('http://localhost:5000/api/friends', friend)
    .then(res => dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}

export const deleteFriend = id => dispatch => {
  dispatch({type: DELETE_FRIEND_START});
  axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({type: DELETE_FRIEND_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}