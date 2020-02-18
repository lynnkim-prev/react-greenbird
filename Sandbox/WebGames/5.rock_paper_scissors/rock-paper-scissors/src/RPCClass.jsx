import React, { Component } from 'react';

export default class RPC extends Component {
  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id='computer' style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0 ` }}></div>
        <div>
          <button id='rock' className='btn' onClick={() => onClickBtn('Rock')}>
            Rock
          </button>
          <button id='scissor' className='btn' onClick={() => onClickBtn('Scissor')}>
            Scissor
          </button>
          <button id='paper' className='btn' onClick={() => onClickBtn('Paper')}>
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
