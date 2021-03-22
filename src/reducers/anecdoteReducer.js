const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sortByVotes = (a, b) => {
  return a.votes < b.votes ? 1 : a.votes === b.votes ? 0 : -1
}

const initialState = () => {
  return anecdotesAtStart.map(asObject).sort(sortByVotes);
}

export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const addAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

const reducer = (state = initialState(), action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case('VOTE'):
      const anecdoteToUpdate = state.find(a => a.id === action.data.id);
      console.log(anecdoteToUpdate);
      if(anecdoteToUpdate)
      {
        const updatedAnecdote = {...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1};
        return state.map(a => a.id === updatedAnecdote.id ? updatedAnecdote : a).sort(sortByVotes);
      }
    case('CREATE'):
      return state.concat(action.data).sort(sortByVotes);
    default: return state;
  }
}

export default reducer
