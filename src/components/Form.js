
import { useState, useEffect } from 'react'
import {  useDispatch } from 'react-redux'

import Notification from './Notification'
import anecdoteReducer, { createAnecdote } from '../reducers/anecdoteReducer'

import anecdoteService from '../services/anecdotes'

const AnecdoteForm = ({formSubmitProp, valueProp }) => {
    const [render, setRender] = useState(false)

    const [anecdoteText, setAnecdoteText] = useState('')
    const dispatch = useDispatch()

    const [addedAnecdote, setAddedAnecdote] = useState(false)

    // if render state === true, then it renders screen
    useEffect(() =>{
        console.log('RENDERED screen')
        setRender(false)
        //setAddedAnecdote(false)

    },[render])



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('siuuu', anecdoteText)
        // sending input text to asObject
        dispatch(createAnecdote(anecdoteText))

        anecdoteService.createNew(anecdoteText)

        setAddedAnecdote(true)
        //setting state for rendering
        setRender(true)
        //
 

    }

    return (
    <div>
    <h1>Create anecdote</h1>
    <Notification renderProp={addedAnecdote}/>
    <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={anecdoteText}
          onChange={(d) => setAnecdoteText(d.target.value)}
        />

        <input type="submit" />
    </form>
    </div>
    )
}


export default AnecdoteForm















