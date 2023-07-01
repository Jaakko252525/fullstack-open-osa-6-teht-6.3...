


const filterReducer = (state = 'FIL', action) => {
    console.log('ACTION: ', action)
    
    // loggin the anecdotes from store
    console.log('anecdotes from store:' )
    // then checking if input in anecdote
    // if input in anecdote it is showed

    switch (action.type) {
      case 'FILTER':
        console.log('action ', action)
        return action.payload
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





