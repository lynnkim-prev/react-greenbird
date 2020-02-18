import React, { Component } from 'react';

// Lifecycle of Class component
// 컨스트럭터 - state에 있던 것들이 렌더가 될때 클래스에 붙는다. 혹시 ref가 있다면 ref까지 렌더링 된 후에 처리를 한다. 그렇게 첫번째 렌더링이 끝났다면 componentDidMount가 실행된다.
// 그러면 화면에 보인다. 그러면 component 안에서 setState를 하거나, 부모가 props를 바꿀 때, 이제 리렌더링이 일어나잖아요.
// 그 리렌더링이 일어날 때, shouldComponentUpdate에서 return true가 되는 경우, 어? 리렌더링 해줘야돼. 니까 리렌더링 해줘야된다. 그럼 리렌더링이 일어난다.
// 리렌더링이 일어난 후에는 componentDidUpdate,
// 부모는 나를 없앨 수 있어서, 부모가 나를 없앴을 때 (자식컴포넌트)는 componentWillUnmount가 실행된다. 그럼 그 후에 화면에서 사라져버린다.

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔 때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
  rock: '0',
  scissor: '-142px',
  paper: '-284px',
};

const scores = {
  rock: 1,
  scissor: 0,
  paper: -1,
};

class RPC extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  // 컴포넌트가 첫 렌더링 된 후. 렌더가 성공적으로 실행됐다면 그 다음에 실행된다. (after render successfully performed,)
  // 여기에 비동기 요청을 많이 해요.
  // 예를들어, componentDidMount 안에 비동기요청을 하고, componentWillUnmount로 비동기요청을 끝낼 수 있다.
  // setInterval을 componentDidMount에 써서 실행시킨 후, componentWillUnmount로 정리하지 않으면, 이 컴포넌트가 소멸돼도 브라우저가 켜있는 내내 돌아간다.
  // setTimeout, setInterval같은거 메모리 계속 차다가 터진다.
  // 따라서 완료되지 않은 비동기 요청같은건 unmount에서 정리해줘야된다. 짝으로 쓰면 됨! componentDidMount - componentWillUnmount를 짝으로 쓰자.

  componentDidMount() {
    // rock -> scissor -> paper 로 돌려주기
    this.interval = setInterval(() => {
      const { imgCoord } = this.state; // closure문제 때문에 변수를 안에 선언
      if (imgCoord === rspCoords.rock) {
        this.setState({
          imgCoord: rspCoords.scissor,
        });
      } else if (imgCoord === rspCoords.scissor) {
        this.setState({
          imgCoord: rspCoords.paper,
        });
      } else if (imgCoord === rspCoords.paper) {
        this.setState({
          imgCoord: rspCoords.rock,
        });
      }
    }, 1000);
  }

  // 리렌더링 (setState / props가 바뀌었을 때)
  componentDidUpdate() {}

  // 컴포넌트가 제거되기 직전. 부모가 나 컴퍼넌트를 없앴을 때 remove comp
  // 비동기 요청 정리를 많이 해요.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = choice => {};

  render() {
    const { imgCoord, result, score } = this.state;
    return (
      <>
        <div id='computer' style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0 ` }}></div>
        <div>
          <button id='rock' className='btn' onClick={() => this.onClickBtn('rock')}>
            Rock
          </button>
          <button id='scissor' className='btn' onClick={() => this.onClickBtn('scissor')}>
            Scissor
          </button>
          <button id='paper' className='btn' onClick={() => this.onClickBtn('paper')}>
            Paper
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RPC;
