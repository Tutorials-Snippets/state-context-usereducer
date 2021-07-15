// This file is not used in this project, its for example only
// React counter with localStorage - Persistent
// Link: https://codesandbox.io/s/ry4qyrpmz4?file=/src/index.js:0-3429

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

console.log("new counter-example");

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
  render() {
    return (
      <div class="container">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        <p>I can remeber your last number and start the count from there!</p>
        <p>I can do this because I use your local storage to save the data!</p>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

// line 46 we set up a default value of 0 for count
// we can also pass in a value for count of 859, but when we click reset,
// it will invoke the default value of 0 as the click handler is set up to do so
// this.setState is a function() which is called with a single argument
// which is also a function. We can pass prevState in (predefined) so we can
// access the previous/present state of count and then =/-/reset count

// setState = another thing to note is we set the state in the constructor.
// we could make several states there is we wished - say = count: 0, name = "Jeff"
// this is fine, as it is at the moment, only count would change. To render name we would
// put {this.state.name} in the render section. This would indeed print name, but it has no effect on us pressing
// and re-rendering count to the DOM. So we can set different named states under the Counter class
// inside the constructor and then change that state within the class
// SO WE UPDATE THE STATE - NOT REPLACE IT

// so, below here was the orinial file structure, but above
// helps us set up state change and other ES6 abilities.

//let count = 0
//const addOne = () => {
//  count++
//  renderCounterApp()
//}
//const minusOne = () => {
//  count--
//  renderCounterApp()
//}
//const reset = () => {
//  count = 0
//  renderCounterApp()
//}
//
//const renderCounterApp = () => {
//  const templateTwo = (
//  <div>
//    <h1>Count: {count}</h1>
//    <button onClick={addOne}>
//      +1
//    </button>
//    <button onClick={minusOne}>
//      -1
//    </button>
//    <button onClick={reset}>
//      reset
//    </button>
//  </div>
//  )
//
//  ReactDOM.render(templateTwo, appRoot)
//}
//
//renderCounterApp()
//