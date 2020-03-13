import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";

// Component는 Next에서 넣어주는 props. 부모컴포넌트인 app과 자식컴포넌트인 index가 합쳐진다.
const GreenBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>GreenBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

GreenBird.propTypes = {
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  Component: PropTypes.elementType
};

export default GreenBird;
