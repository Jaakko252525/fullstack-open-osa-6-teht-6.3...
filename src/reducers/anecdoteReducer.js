import { get } from "mongoose"


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


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




const initialState = anecdotesAtStart.map(puttingDefaultAnecdotes)

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




