import React, { Component } from "react";
import Lotto from "./LottoHooks";
import ResponseCheck from "./ResponseCheckHooks";

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    if(this.props.match.params.name === 'lotto'){
        return <Lotto />
    } else if(this.props.match.params.name === 'res_check'){
        return <ResponseCheck />
    }
    return (
      <>
          일치하는 겡미이 없음
      </>
    );
  }
}

export default GameMatcher;


/*
기본 브라우저의 동작과 다르기 때문에,
페이지 넘나든 내역도 기본 브라우저가 제공하는 내용으로 쓰면 안되고,
react router가 제공하는 이 history를 써줘야한다. 눈속임을 위한 메소드들이 있다.

history: 페이지 넘나든 내역. 메소드: go, goBack, goForward, push, replace
match: path: "/game/:name" params: {name: "index"} 파람 내용
*/
