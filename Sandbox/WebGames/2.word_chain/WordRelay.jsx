const React = require('react');
const { useState, useRef } = React;



const WordRelay = () => {

  const [word, setWord] = useState('lynn');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);


  onSubmit = (e) => {
    e.preventDefault();
    if(word[word.length -1] === value[0]){
      setResult("딩동댕~");
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult("땡!");
      setValue('');
      inputRef.current.focus()
    }
  };
  
  onChangeInput = (e) =>  {
    setValue(e.target.value);
  };
  
    return(
      <>
      <div> { word }  </div>
        <form onSubmit={ onSubmit } >
          <label htmlFor="wordInput">글자 입력 ㄱ</label>
          <input id="wordInput" className="wordInput" ref={ inputRef }  value={ value } onChange={ onChangeInput } />
          <button type="submit"> ㅜ.ㅠ </button>
        </form>
      <div> { result }  </div>
      </>
      )
  }
  
  /* 쪼갠 파일에서 쓰는 컴포넌트를 밖에서도 쓸 수 있게 해주는 것. 그러면 client.jsx에서 불러올 수 있다. */
  module.exports = WordRelay;