import React from "react";
import Link from 'next/link'

const Home = () => {
    return (
        <>
            Hello next!
            <Link href="/about"><a>about</a></Link>
        </>
    );
};

export default Home;