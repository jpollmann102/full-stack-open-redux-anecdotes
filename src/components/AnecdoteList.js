import React from 'react';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(a => a.content.includes(state.filter));
  });
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const votedNote = anecdotes.find(a => a.id === id);
    dispatch(addVote(id));
    dispatch(setNotification(`you voted '${votedNote.content}'`, 5));
    // dispatch(changeNotification(`you voted '${votedNote.content}'`));
    // setTimeout(() => {
    //   dispatch(closeNotification());
    // }, 5000);
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={ anecdote.id }>
          <div>
            { anecdote.content }
          </div>
          <div>
            has { anecdote.votes }
            <button onClick={ () => vote(anecdote.id) }>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList;
