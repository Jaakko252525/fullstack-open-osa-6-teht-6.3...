
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'



const AnecdoteList = () => {
  const [render, setRender] = useState(false)

  const anecdotes = useSelector(state => state.withoutFilter)
  const dispatch = useDispatch()

  // if render state === true, then it renders screen
  useEffect(() =>{
    console.log('RENDERED screen from adding')
    setRender(false)

  },[render])


  const vote = (anecdote) => {
    console.log('anecdotes first',anecdotes)
    console.log('in vote', anecdote)
    dispatch(voteAnecdote(anecdote))

    //setting state for rendering
    setRender(true)
  }




  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
