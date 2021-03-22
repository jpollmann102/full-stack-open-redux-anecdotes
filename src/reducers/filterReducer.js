export const changeFilter = (filter) => {
  return {
    type: 'UPDATE_FILTER',
    filter
  }
}

const filterReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('UPDATE_FILTER'):
      return action.filter;
    default: return state;
  }
}

export default filterReducer
