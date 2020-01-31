// class: PureComponent, shouldUpdateComponent
import React, { PureComponent } from 'react'
class Try extends PureComponent {
  constructor(props) {
    super(props)
    // 다른 정밀한 동작
    const filtered = this.props.filter(() => {
      
    });
    this.state = {
       result: filtered,
       try: this.props.try,
    }
  }

  render() {
    const {tryInfo} = this.props;
    return (
      <li>
        <div>{tryInfo.try} </div>
        <div>{tryInfo.result} </div>
      </li>
    );
  }
}


//hooks : memo
// import React, { memo } from "react";
// const Try = memo(({tryInfo}) => {
//   return (
//     <li>
//       <div>{tryInfo.try} </div>
//       <div>{tryInfo.result} </div>
//     </li>
//   )
// })

export default Try;
