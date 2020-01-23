const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root'); 

const WordRelay = require('./WordRelay'); /* 필요한것만 가져올 수 있어서 효율적이다 ! 불러와서 레고 조립하듯 끼워맞추기*/

const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector("#root"));

