
import { useState, useEffect } from 'react'
import {  useDispatch } from 'react-redux'

import { asObject } from '../reducers/anecdoteReducer'




const AnecdoteForm = ({formSubmitProp, valueProp }) => {
    const [render, setRender] = useState(false)

    const [anecdoteText, setAnecdoteText] = useState('')
    const dispatch = useDispatch()

    // if render state === true, then it renders screen
    useEffect(() =>{
        console.log('RENDERED screen')
        setRender(false)

    },[render])



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('siuuu', anecdoteText)
        // sending inout text to asObject
        dispatch(asObject(anecdoteText))
        //setting state for rendering
        setRender(true)

    }

    return (
    <div>
    <h1>Create anecdote</h1>
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















