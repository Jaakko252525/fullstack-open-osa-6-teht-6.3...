
import { useEffect } from 'react'
import AnecdoteForm from './components/Form'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(notes => dispatch(setAnecdotes(notes)))
  }, [dispatch])



  return (
    <div>
      <AnecdoteForm/>
      <Filter/>
      <h2>Anecdotes</h2>
      <AnecdoteList/>
    </div>
  )

      }

export default App



