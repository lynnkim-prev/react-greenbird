import React from "react";
import styled, { css } from "styled-components";

// Circle 이라는 컴포넌트를 만들건데, style된 div다. tagged template literal
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge && // props에 huge가 있을 경우 하단의 css 스타일을 불러옴. 
    css` // 내부의 props를 읽어오기 위해서 css로 tagged template literal 씀. 안쓰면 못읽어옴. 
      ${props=>props.불러오고싶은프롭}
      width: 10rem;
      height: 10rem;
    `};
`;

const StyledComponentExample = () => {
  return (
    <>
      <Circle color={"yellow"} />
      <Circle color={"blue"} huge />
    </>
  );
};

export default StyledComponentExample;
