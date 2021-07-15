import React from 'react';
import { useStore } from '../store/Store';
import { inventoryReducer, initialState, deductInventory } from '../store/inventoryReducer';

const BookingForm = () => {
    const [, dispatch] = useStore();
    const handleOnSubmit = () => {
        dispatch(inventoryReducer(initialState, deductInventory));
        console.log(initialState)
      }
    
      const formStyle = {
        formControl: {
          margin: '16pt',
        },
        input: {
          margin: '0 16pt',
        },
      };
    
      return (
        <div>
          <h2>Form</h2>
          <div style={formStyle.formControl}>
            <label htmlFor="name">Full name</label>
            <input
              style={formStyle.input}
              type="text"
              id="name"
              name="name"
             
            />
          </div>
          <div style={formStyle.formControl}>
            <label htmlFor="numberOfContact">Telephone of contact</label>
            <input
              style={formStyle.input}
              type="text"
              id="numberOfContact"
              name="numberOfContact"
             
            />
          </div>
          <div style={formStyle.formControl}>
            <label htmlFor="numberOfPeople">Number of Guests</label>
            <input
              style={formStyle.input}
              type="text"
              id="numberOfPeople"
              name="numberOfPeople"
              
            />
          </div>
          <div style={formStyle.formControl}>
            <label htmlFor="numberOfPeople">Date and Time</label>
            <input
              style={formStyle.input}
              type="datetime-local"
              id="dateTime"
              name="dateTime"
             
            />
          </div>
    
          <button type="button" onClick={handleOnSubmit }>
            Book a stall
          </button>
        
        </div>
      );


}

export default BookingForm;