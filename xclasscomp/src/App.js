import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleUpdate = (operation) => {
    this.setState((prevState) => ({
      count: operation === "increment" ? prevState.count + 1 : prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleUpdate("increment")}>Increment</button>
        <button onClick={() => this.handleUpdate("decrement")}>Decrement</button>
      </div>
    );
  }
}

export default App;
