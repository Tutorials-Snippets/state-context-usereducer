// Adapted from: React counter with localStorage - Persistent
// Link: https://codesandbox.io/s/ry4qyrpmz4?file=/src/index.js:0-3429

import React from "react";
// import ReactDOM from "react-dom";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  // I have implemented conditional logic in the button
  // If the count is equal to 0 the button is disabled.
    
 
  render() {
      return (
      <div class="container">
        <h1>Count: {this.state.count}</h1>
        <button 
            onClick={this.handleAddOne}
            disabled={this.state.count === 0}
            >
            +1
        </button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        <p>I can remeber your last number and start the count from there!</p>
        <p>I can do this because I use your local storage to save the data!</p>
      </div>
    );
  }
}

export default Counter