import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
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

const updateAnecdote = async (id) => {
  const anecdote = await getAnecdote(id);
  const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1};
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
  return response.data;
}

export default {
  getAllAnecdotes,
  createAnecdote,
  updateAnecdote
};
