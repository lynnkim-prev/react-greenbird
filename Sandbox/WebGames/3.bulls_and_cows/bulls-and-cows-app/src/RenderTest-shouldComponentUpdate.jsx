import React, { Component } from 'react'

class Test extends Component {
  state = {
    counter: 0,
  };

  // 최적화. 현재의 카운터와 미래의 카운터가 다르면 렌더링 하고 아니면 안함
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState({})
  }

  render() {
    console.log('렌더링', this.state);
    
    return(
      <>
        <button onClick={this.onClick}>클릭</button>
      </>
    )
  }
}

export default Test;