import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const createAnecdote = async (anecdote) => {
  const newAnecdote = {
    content: anecdote,
    votes: 0
  };

  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
}

export default {
  getAllAnecdotes,
  createAnecdote
};
