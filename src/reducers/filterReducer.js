const initialState = {
  filter: ''
}

export const changeFilter = (filter) => {
  return {
    type: 'UPDATE_FILTER',
    filter
  }
}

const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('UPDATE_FILTER'):
      return { filter: action.filter };
    default: return state;
  }
}

export default filterReducer
