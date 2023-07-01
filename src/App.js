
import AnecdoteForm from './components/Form'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {

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



