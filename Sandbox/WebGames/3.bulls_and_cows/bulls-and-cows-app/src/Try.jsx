import React, {Component} from 'react';

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.tryInfo.try}</b>
        <div>{this.props.tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;