
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

import anecdoteReducer, { vote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
  const [render, setRender] = useState(false)

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  // if render state === true, then it renders screen
  useEffect(() =>{
    console.log('RENDERED screen from adding')
    setRender(false)

  },[render])


  const voteFunc = (anecdote) => {
    console.log('anecdotes first',anecdotes)
    console.log('in vote', anecdote)
    dispatch(vote(anecdote))

    //setting state for rendering
    setRender(true)
  }

  console.log('these are anecdotes', anecdotes)

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteFunc(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
