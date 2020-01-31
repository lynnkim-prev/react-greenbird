import React, { PureComponent } from 'react'

class Test extends PureComponent {
  state = {
    counter: 0,
    string: 'hello',
    number: 1,
    boolean: true,
    object: {a: 'b', c: 'd'}, // 알아차리지 못한다
    array: [1,2] // 이것도 
  };

  // 새로운 객체나 배열을 만들어서 리액트가 state다른것 알아차리고 렌더링 하도록 해주기
  onClick = () => {
    this.setState((prevState)=>{
      return {
        array: [...prevState.array, prevState.number]
      }
    })
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