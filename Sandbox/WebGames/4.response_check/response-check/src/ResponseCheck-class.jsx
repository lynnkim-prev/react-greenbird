import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: 'waiting', // blue
    message: '클릭해서 시작하세요',
    result: []
  };
// waiting(blue - 클릭해서 시작하세요) 클릭 -> ready (red - 초록색 되면 클릭하세요 ) -> 2~3초 후 -> now (green - 지금 클릭하세요) 
  onClickScreen = () => {
    const {state, message, result} = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready', // red
        message: '초록색되면 클릭하세요',
      });
      setTimeout(() => {
        this.setState({
          state: "now", // green
          message: "지금 클릭 ㄱㄲㄱ"
        });
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    }
  };

  renderAverage = () => {
    const { result } = this.state; // 구조분해 !
    return result.length === 0 ? null : ( // 삼항연산자. result가 없어서 array에 보여줄게 없을 때 null로 처리해서 안보이게 함
      <div>
        평균시간:
        {result.reduce((a, c) => a + c) / result.length}
        ms
      </div>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
