import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting', // blue
    message: '클릭해서 시작하세요',
    result: [],
  };

  // state로 하면 렌더링이 다시 일어나니까, 안나게 하려구 여긴 바뀌어도 렌더링 안됨
  timeout;
  startTime;
  endTime;

  // waiting(blue - 클릭해서 시작하세요) 클릭 -> ready (red - 초록색 되면 클릭하세요 ) -> 2~3초 후 -> now (green - 지금 클릭하세요)
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready', // red
        message: '초록색되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now', // green
          message: '지금 클릭 ㄱㄲㄱ',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      console.log('땡!!');
      clearTimeout(this.timeout); // Timeout 초기화. 없으면 땡인데도 2~3초 랜덤 먹음
      this.setState({
        state: 'waiting',
        message: '성급했어요ㅉㅉ 다시 클릭해서 시작하시죠??',
        result: [],
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState(prevState => {
        return {
          state: 'waiting',
          message: '잘했어요 클릭해서 또 시작하세요!',
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
      console.log('굿잡');
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state; // 구조분해 !
    return result.length === 0 ? null : ( // 삼항연산자. result가 없어서 array에 보여줄게 없을 때 null로 처리해서 안보이게 함
      <>
        <div>평균시간:{result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={this.onReset}>리셋ㄲ</button>
      </>
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
