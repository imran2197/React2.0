import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    // this.setState({
    //   count: this.state.count - 1,
    // });
    this.setState((currState) => {
      return {
        count: currState.count - 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
