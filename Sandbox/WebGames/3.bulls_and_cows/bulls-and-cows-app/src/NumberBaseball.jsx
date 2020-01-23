import React, { Component }  from 'react';


const getNumbers = () => {

}

class NumberBaseball extends Component {
  state =  {
    result: '',
    value: '',
    answer: getNumbers()
  };

  render() {
    return (
      <>
        <h1>{ this.state.result } </h1>
      </>
    )
  }
}

export default NumberBaseball;