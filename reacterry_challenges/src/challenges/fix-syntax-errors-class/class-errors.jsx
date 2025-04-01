import React, { Component } from 'react';

class SyntaxErrorsClass extends Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(`Count has been updated to: ${this.state.count}`);
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
  }


  componentWillUnmount() {
    console.log("componentWillUnMount")
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1 data-testid='title'>Counter</h1>
        <p data-testid='count'>Current Count: {this.state.count}</p>
        <button data-testid='button' onClick={this.incrementCount}>Increment Count</button>
        <button data-testid='button' onClick={this.decrementCount}>Decrement Count</button>
      </div>
    );
  }
}

export default SyntaxErrorsClass
