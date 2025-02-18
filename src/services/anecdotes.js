import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addVote = async id => {
  const anecdoteToChange = await axios.get(`${baseUrl}/${id}`)
  const newAnecdote = {
    ...anecdoteToChange.data,
    votes: anecdoteToChange.data.votes + 1,
  }
  const response = await axios.put(`${baseUrl}/${id}`, newAnecdote)
  return response.data
}

export default { getAll, createNew, addVote }
