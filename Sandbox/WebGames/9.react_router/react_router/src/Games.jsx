import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      {/*레이아웃 부분 (Route 바깥 - 제로초 홈페이지 보면 ㄷ자로 안바뀌는 곳)*/}
      <div>
        <Link to="/game/res_check?query=10&key=value&bye=react">ResponseCheck</Link>
        &nbsp;
        <Link to="/game/lotto">Lotto</Link>
        &nbsp;
        <Link to="/game/index">게임매쳐</Link>
      </div>

      {/*링크 클릭시 바뀌는 부분 */}
      <div>
        {/* 동적 라우팅.  :name param으로 압축하기 */}
        {/*render props. Route안에서 프롭 넘겨주기.*/}
        <Switch>
            <Route exact path="/" render={props => <GameMatcher {...props} />} />
            <Route path="/game/:name" render={props => <GameMatcher {...props} />} />
        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default Games;

{
  /* 동적라우트 매칭 예시보기: https://youtu.be/gJlz5HUoJtY?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn&t=327*/
}

/*
** 동적라우트 사용 예시
/game/:name
/category/:name
이렇게 카테고리 안에 라우트가 있을 때. 일일이 라우트를 만들어주기 힘드니까, 언제 바뀔지도 모르고. =>  동적 라우트로

** Switch
깜빡깜빡
첫번째 일치하는 것만 렌더링 해준다 나머지 일치하는것들은 렌더링 x
동시에 여러개 뜨는거 막음.
주의! switch를 쓰면 상위주소도 일치하는걸로 쳐버려서 exact path를 해줘야된다.

** queryString 사용 예시
/category/JavaScript?page=3.. 4... 5...
부가정보. 카테고리 안에서 페이지 이동. 새로고침 해도 똑같이 3번째 페이지에 띄워줄 수 있다. 안하면 매번 첫페이지만(/category/JavaScript) 나옴.
리액트 라우터에서는 queryString해석하는 것을 제공하지 않아서 urlSearchParams로 해석하기.
#샵 뒤에는 서버에 안보임 ..!
  */
