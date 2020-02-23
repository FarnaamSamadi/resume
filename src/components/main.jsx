import React, { Component } from "react";

class Main extends Component {
  state = {
    time: new Date(),
    pause: false
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick = () => {
    this.setState({ time: new Date() });
  };

  toggleWatch = () => {};

  render() {
    let { time } = this.state;
    return (
      <div className="bg-indigo-300" onClick={() => this.toggleWatch()}>
        Now is: {time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Main;
