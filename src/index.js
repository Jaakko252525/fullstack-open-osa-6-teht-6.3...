import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './reducers/filterReducer'

import { asObject } from './reducers/anecdoteReducer'
import { filterChange } from './reducers/filterReducer'

import dick from './reducers/filterReducer'



const store = configureStore({
  reducer: {
    anecdotes: reducer,
    filter: dick
  }


})

console.log('state',store.getState())

// exporting store so filterReducer can use it!!
//export default store



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)











