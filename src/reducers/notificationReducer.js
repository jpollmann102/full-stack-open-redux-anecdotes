const initialState = {
  message: ''
}

let timeoutId;

export const changeNotification = (message) => {
  return {
    type: 'UPDATE_NOTIFICATION',
    message
  }
}

export const closeNotification = () => {
  return {
    type: 'CLOSE_NOTIFICATION'
  }
}

export const setNotification = (message, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_NOTIFICATION',
      message
    });

    if(timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch({ type: 'CLOSE_NOTIFICATION' });
    }, timeout*1000);
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('UPDATE_NOTIFICATION'):
      return { message: action.message };
    case('CLOSE_NOTIFICATION'):
      return { message: '' };
    default: return state;
  }
}

export default notificationReducer
