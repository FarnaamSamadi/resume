import React, { Component } from "react";

class FullPage extends Component {
  render() {
    return (
      <div className="h-screen w-full bg-red-300 mx-auto flex justify-center items-center">
        {this.props.children}
      </div>
    );
  }
}

export default FullPage;
