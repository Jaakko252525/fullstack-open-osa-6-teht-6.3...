


import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0, id: 69 }
  const response = await axios.post(baseUrl, object)
  return response.data
}



export default { getAll, createNew }


















