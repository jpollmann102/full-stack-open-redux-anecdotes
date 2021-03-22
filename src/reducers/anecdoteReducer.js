import anecdoteService from '../services/anecdotes';

const sortByVotes = (a, b) => {
  return a.votes < b.votes ? 1 : a.votes === b.votes ? 0 : -1
}

export const addVote = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateAnecdote(id);
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: updatedAnecdote
    });
  }
}

export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: newAnecdote
    });
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAllAnecdotes();
    dispatch({
      type: 'INITIALIZE_ANECDOTES',
      data: anecdotes
    });
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('VOTE_ANECDOTE'):
      const anecdoteToUpdate = state.find(a => a.id === action.data.id);

      if(anecdoteToUpdate)
      {
        return state.map(a => a.id === action.data.id ? action.data : a).sort(sortByVotes);
      }else return state;
    case('CREATE_ANECDOTE'):
      return state.concat(action.data).sort(sortByVotes);
    case('INITIALIZE_ANECDOTES'):
      return state.concat(action.data).sort(sortByVotes);
    default: return state;
  }
}

export default anecdoteReducer
