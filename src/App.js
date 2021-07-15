import React from 'react'
import './App.css';
import BookingForm from './components/BookingForm'
import CounterButton from './CounterButton';
import Counter from './store/inventoryReducer2'

function App() {
  return (
    <>
    <h1>Form with state</h1>
    <BookingForm />
    <CounterButton name='count2'>-1</CounterButton>
    <Counter/>
  </>
  )
}

export default App;
