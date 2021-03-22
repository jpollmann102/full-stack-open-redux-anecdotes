import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdoteService from './services/anecdotes';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAllAnecdotes().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)));
  }, []);

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
