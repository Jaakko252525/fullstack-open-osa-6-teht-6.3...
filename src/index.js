import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import { configureStore } from '@reduxjs/toolkit'


import { asObject } from './reducers/anecdoteReducer'
import { filterChange } from './reducers/filterReducer'

import filterReducer from './reducers/filterReducer'

//importing anecdoteServices
import anecdoteService from './services/anecdotes'
import reducer, { setAnecdotes } from './reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    anecdotes: reducer,
    filter: filterReducer
  }


})


anecdoteService.getAll().then(anecdotes =>
  store.dispatch(setAnecdotes(anecdotes))
  )




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)







