const path = require('path'); /* 노드에서 경로를 쉽게 조작하도록 주는 것 */
const webpack = require('webpack');

/* 알아서 입력된 파일들을 하나로 합쳐준다! */
module.exports = {
  name: 'word-relay-setting', /* 끝말잇기에 대한 설정을 하겠어 */
  mode: 'development', /* 개발용 모드. 실 서비스에서는 production으로 바꾸면 된다. */
  devtool: 'eval', /* 빠르게 */
  resolve: {
    extensions: ['.js', '.jsx'] /* 알아서 이런 확장자 웹팩이 찾아서 app.js로 만들어준다. */
  },
  
  entry: {/* 입력 */
    app: ['./client'],
  },
  
  module: {/* 입력에 모듈을 적용하고 */
    rules: [{
      test: /\.jsx?/, /* .jsx 에 최신 문법을 옛날버전에도 돌아가는 문법으로 바꿔주겠다 */
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: { browsers: ['>5% in CA'], }, debug: true}], '@babel/preset-react'], /* 플러그인들의 모임 = preset */
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-hot-loader/babel'
      ],
      }
    }]
  }
  , 
  plugins: [/* 플러그인을 적용하고.. */
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {/* 출력 */
    path: path.join(__dirname, 'dist'), /* 경로를 알아서 합쳐준다. 현재폴더 안에 들어있는 dist */
    filename: 'app.js', /* './client' + client가 이미 불러온 'WordRelay.jsx' + React, ReactDom 을 합쳐서 app.js로 만들어준다.*/
    publicPath: '/dist/'
  },
}
