const initialState = {
  visible: false,
  message: ''
}

export const changeNotification = (message) => {
  return {
    type: 'UPDATE',
    message
  }
}

export const closeNotification = () => {
  return {
    type: 'CLOSE'
  }
}

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('UPDATE'):
      return { message: action.message, visible: true };
    case('CLOSE'):
      return { message: '', visible: false };
    default: return state;
  }
}

export default notificationReducer
