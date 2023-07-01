import { useState, useEffect } from 'react'
import { filterReducer, filterChange } from "../reducers/filterReducer"
import {  useDispatch, useSelector } from 'react-redux'



const Filter = () => {
    const [inputText, setInputText] = useState('')
    const [render, setRender] = useState(false)
  
    const anecdotes = useSelector(state => state.withoutFilter)

    const dispatch = useDispatch()

    // if render state === true, then it renders screen
    useEffect(() =>{
        console.log('RENDERED screen when filter applied')
        setRender(false)

    },[render])


    const handleChange = (event) => {

        setInputText(event.target.value)
        // input-kentän arvo muuttujassa event.target.value
        dispatch(filterChange(inputText))
        //setting state for rendering
        setRender(true)
    }
    const style = {
      marginBottom: 10
    }



  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
        
      </div>



    )
  }
  
  export default Filter








