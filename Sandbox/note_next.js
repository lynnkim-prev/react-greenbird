/* 
routing:
      pages 폴더를 주소체계로 사용. (폴더명 고정)
      next를 사용하면 리액트 라우터를 사용할 필요 없이 pages폴더 안에서 라우팅 가능..!!

      ex. front/pages/user/create.js
                    /about.js
                    /index.js      상태라면

      localhost:3000/user/create
      localhost:3000/about 이런식으로 라우팅 할 수 있다 대박

      서버사이드 렌더링 + 코드스플리팅까지 해준다. (전체 다 불러오는게 아니라 필요한 페이지 하나만!)
*/


{/* Next에서 링크 만드는 법. */ }
import React from "react";
import Link from "next/link";

const Home = () => {
      return (
            <>
                  <Link href="/about"><a>about</a></Link>
                  <div>Hello, Next!</div>
            </>
      );
};

export default Home;

/* Next에서 html 헤드 설정하기 */
import Head from "next/head";
