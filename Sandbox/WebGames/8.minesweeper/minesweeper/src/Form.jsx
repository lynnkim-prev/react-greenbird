import React, { useCallback, useState } from 'react';

const Form = () => {
  const [ver, setVer] = useState('');
  const [hor, setHor] = useState('');
  const [mineNum, setMineNum] = useState('');

  const onChangeVer = useCallback(e => {
    setVer(e.target.value);
  }, []);

  const onChangeHor = useCallback(e => {
    setHor(e.tartget.value);
  }, []);

  const onChangeMineNum = useCallback(e => {
    setMineNum(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {});

  return (
    <>
      <input type='number' placeholder='ver' value={ver} onChange={onChangeVer} />
      <input type='number' placeholder='hor' value={hor} onChange={onChangeHor} />
      <input type='number' placeholder='mineNum' value={mineNum} onChange={onChangeMineNum} />
      <button onClick={onClickBtn}>start</button>
    </>
  );
};

export default Form;
