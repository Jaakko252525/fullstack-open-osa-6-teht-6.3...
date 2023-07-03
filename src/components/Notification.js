

import { useSelector } from 'react-redux'


const Notification = ({renderProp}) => {

  const anecdotes = useSelector(state => state.anecdotes)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  

  if (renderProp === true) {
    const word = JSON.stringify(anecdotes.slice(-1))
    
    console.log('siiiiii', word)

  return (
    <div style={style}>
      Added new anecdote"{word}"
    </div>
  )
  }
}

export default Notification