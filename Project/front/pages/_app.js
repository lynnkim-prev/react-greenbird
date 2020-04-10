import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper'; // withReducer - HOC로 GreenBird에 store를 프롭스로 넣어줄 수 있게 함.
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // Provider Component
import reducer from '../reducers';

// Component는 Next에서 넣어주는 props. 부모컴포넌트인 app과 자식컴포넌트인 index가 합쳐진다.
const GreenBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>GreenBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

GreenBird.propTypes = {
    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    Component: PropTypes.elementType,
    store: PropTypes.object
};

export default withRedux((initialState, options) => {
    const middlewares = []; // 과정 변조, 기능 추가 // middleware: action - store 사이에서 동작.
    const enhancer = compose(
        // compose: 미들웨어 적용할 때 미들웨어끼리 합성하기. redux devtools 사용
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(GreenBird);
