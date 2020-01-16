import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
    {/* Next에서 링크 만드는 법. */}
    <Link href="/about"><a>about</a></Link>
    <div>Hello, Next!</div>
    </>
  );
};

export default Home;