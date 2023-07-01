
import { createSlice } from '@reduxjs/toolkit'




const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// random number generator for id
const getId = () => (100000 * Math.random()).toFixed(0)


const puttingDefaultAnecdotes = (anecdote) => {
  const object = {
    content: anecdote,
    id: getId(),
    votes: 0

  }
  return object
}


const initialState = anecdotesAtStart.map(puttingDefaultAnecdotes)

// new reducer

const filterSlice = createSlice(
  {
  name: 'filter',
  initialState,
  reducers: {
    filterAnecdotes(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
      })

      // function that checks if filter string in anecdote
      const checkFilter = (anecdote) => {
          
        const array = []
        if (anecdote.content.includes(action.payload)) {

          const array_2 = array.concat(anecdote.content)
          console.log('this array should only contain filter things',array_2)
          return array_2
        }


      }


      // return the array as state


      return state.filter(checkFilter)
    
    },
  
  }
  }
  
)

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer


/*
const filterReducer = (state = initialState, action) => {
    console.log('ACTIONFilter: ', action)
    

    switch (action.type) {
      case 'FILTER':
        console.log('inside FILTER!')  
        console.log('filter??', action.payload)
        // make array of anecdotes that has the filter

        const checkFilter = (anecdote) => {
          
          const array = []
          if (anecdote.content.includes(action.payload)) {

            const array_2 = array.concat(anecdote.content)
            console.log('this array should only contain filter things',array_2)
            return array_2
          }


        }


        // return the array as state


        return state.filter(checkFilter)

      default:
        return state
    }
  }


// etsii oikeat anecdootit????
export const filterChange = filter => {
    console.log('inside filterChange!', filter)

    const object = {
        type: 'FILTER',
        payload: filter
    }
    return object
}




export default filterReducer



*/

