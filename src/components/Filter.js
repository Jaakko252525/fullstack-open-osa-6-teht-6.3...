import { useState, useEffect } from 'react'
import { filterChange } from "../reducers/filterReducer"
import {  useDispatch, useSelector } from 'react-redux'

import filterReducer, { filterAnecdotes } from '../reducers/filterReducer'

const Filter = () => {
    const [inputText, setInputText] = useState('')
    const [render, setRender] = useState(false)
  
    const anecdotes = useSelector(state => state.filter)

    const dispatch = useDispatch()

    // if render state === true, then it renders screen
    useEffect(() =>{
        console.log('RENDERED screen when filter applied')
        setRender(false)

    },[render])


    const handleChange = (event) => {

        setInputText(event.target.value)
        // input-kentän arvo muuttujassa event.target.value
        dispatch(filterAnecdotes(inputText))
        //setting state for rendering
        setRender(true)
    }
    const style = {
      marginBottom: 10
    }

    console.log('these are anecdotes in filter', anecdotes)


  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
        

      <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
          </div>
        </div>
      ))}
        </div>  
      </div>



    )
  }
  
  export default Filter








