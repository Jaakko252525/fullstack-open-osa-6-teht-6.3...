import { get } from "mongoose"
import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (id) => {
  console.log('inside voteAnecdote!', )

  return {
    type: 'VOTE',
    payload: {id}
  }
}

// random number generator for id
const getId = () => (100000 * Math.random()).toFixed(0)

export const puttingDefaultAnecdotes = (anecdote) => {
  const object = {
    content: anecdote,
    id: getId(),
    votes: 0

  }
  return object
}
export const asObject = (anecdote) => {
  console.log('this is parameter anecdote:', anecdote)
  
  const object = {
    type: 'ADD',
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0
    }
}

  console.log('this is object', object)

  return object
}






// new reducer
const anecdoteSlice = createSlice(
  {
  name: 'anecdotes',
  initialState: [],
  reducers: { 
    vote(state, action) {
      const id = action.payload.id

      const anecdoteThatGetsVoted = state.find(anecdote => anecdote.id === id)

      console.log('this is anecdote', anecdoteThatGetsVoted)

      console.log('anecdotes votes', JSON.parse(JSON.stringify(anecdoteThatGetsVoted.votes)))

      const changedAnecdote = {
        ...anecdoteThatGetsVoted,
        votes: JSON.parse(JSON.stringify(anecdoteThatGetsVoted.votes)) + 1
      }
      console.log('state:',JSON.parse(JSON.stringify(state)))
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const {  vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer



export const createAnecdote = content => {

  // making the object
  const anec = {
    content,
    id: getId(),
    votes: 0
  }

  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anec)
    dispatch(appendAnecdote(newAnecdote))
  }
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const voteAnecdoteReducer = content => {

  console.log('this is content in vote', content)

  return async dispatch => {
    const voteForAnecdoteVariable = await anecdoteService.changeAnecdote(content)

    dispatch(vote(content))
    console.log('PUT req was operated dont know if works correctly')
  }

}



/*
const reducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'ADD':
      console.log("in reducer type 'ADD'")

      console.log('this is action!', action)
      // making object and leaving 'ADD'
      const object = {
        content: action.payload.content,
        id: action.payload.id,
        votes: 0
      }
      const state_2 = state.concat(object)
      state = state_2
    return state
    case 'VOTE':

      //Find index of specific object using findIndex method.    
      const objIndex = state.findIndex((obj => obj.id === action.payload.id.id));

      //before id 
      console.log('Before update:', state[objIndex])

      // updated value
      state[objIndex].votes = action.payload.id.votes + 1

      // after update
      console.log('after update:', state)

    return state
      
    // Add additional case statements for other actions if needed
    
    default:
      return state
  }
};


export default reducer

*/


