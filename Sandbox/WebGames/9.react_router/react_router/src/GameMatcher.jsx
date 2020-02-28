import React, { Component } from 'react';
import Lotto from './LottoHooks';
import ResponseCheck from './ResponseCheckHooks';

const GameMatcher = props => {
  console.log(props);
  const urlSearchParams = new URLSearchParams(
    props.location.search.slice(1) // 맨 앞에 ? 떼주고
  ); // 빈 객체가 아님!
  console.log(urlSearchParams.get('bye'));

  if (props.match.params.name === 'lotto') {
    return <Lotto />;
  } else if (props.match.params.name === 'res_check') {
    return <ResponseCheck />;
  }
  return <>일치하는 겜 없음</>;
};

export default GameMatcher;

/*
리액트 앱은 기본 브라우저의 동작과 다르기 때문에,
페이지 넘나든 내역도 기본 브라우저가 제공하는 내용과 다른, react router로 써줘야 함.

** route
- history: 페이지 넘나든 내역. 메소드: go, goBack, goForward, push, replace (눈속임을 위한 메소드들.)
- location: url 뒷부분 queryString 에서 데이터를 가져올 수 있음. location.search. urlSearchParams으로 해석
            queryString: 쿼리스트링 값은 서버에서도 알아챔. 서버로 데이터를 넘기는 쉬운 방법. urlSearchParams로 해독
- match: path: "/game/:name" params: {name: "index"} 파람 내용 보기 (동적라우팅)

*/
