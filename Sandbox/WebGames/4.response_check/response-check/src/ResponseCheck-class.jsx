import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "Click to Start",
    result: []
  };

  renderAverage = () => {
    const { result } = this.state;
    result.length === 0 ? null : result.reduce((a, b) => a + b) / result.length;
  };

  onClickScreen = () => {};

  render() {
    const { state, message } = this.state;

    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          <div>{message}</div>
        </div>
        {this.renderAverage}
      </>
    );
  }
}

export default ResponseCheck;
