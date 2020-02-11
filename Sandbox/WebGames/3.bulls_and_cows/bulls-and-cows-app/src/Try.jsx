// class: PureComponent, shouldUpdateComponent
// import React, { PureComponent } from 'react'
// class Try extends PureComponent {
//   constructor(props) {
//     super(props)
//     // 다른 정밀한 동작
//     const filtered = this.props.filter(() => {
      
//     });
//     this.state = {
//        result: filtered,
//        try: this.props.try,
//     }
//   }

//   render() {
//     const {tryInfo} = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try} </div>
//         <div>{tryInfo.result} </div>
//       </li>
//     );
//   }
// }



// hooks : memo
import React, { memo } from "react";

const Try = memo(({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try} </div>
      <div>{tryInfo.result} </div>
    </li>
  )
})



// import React, { memo, useState } from "react";

// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result); // prop을 자식이 직접 바꿔줄 수 없기 때문에 state로 받아서 바꿔준다

//   const onClick = () => {
//     setResult("1");
//   };

//   return (
//     <li>
//       <div>{tryInfo.try} </div>
//       <div onClick={onClick}>{result} </div>
//     </li>
//   );
// });



export default Try;
