


import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  console.log('content in POST', content)
  const object = content
  const response = await axios.post(baseUrl, object)
  return response.data
}

const changeAnecdote = async (anecdote) => {


  console.log('inside PUT in axios, this is anecdote', anecdote)

  const newAnecdote = {
    content: anecdote.content,
    id: anecdote.id,
    votes: anecdote.votes + 1
  }
  
  // makig the PUT req
  const response = await axios.put(baseUrl + '/' + anecdote.id, newAnecdote)

  return response.data
}

export default { getAll, createNew, changeAnecdote }


















