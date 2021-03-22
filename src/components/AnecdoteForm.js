import React from 'react';
import anecdoteService from '../services/anecdotes';
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer';
import { changeNotification, closeNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault();

    const content = event.target.content.value;
    event.target.content.value = '';

    const newAnecdote = await anecdoteService.createAnecdote(content);

    dispatch(addAnecdote(newAnecdote));
    dispatch(changeNotification(`you created an anecdote '${content}'`));
    setTimeout(() => {
      dispatch(closeNotification());
    }, 5000);
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={ create }>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm;
