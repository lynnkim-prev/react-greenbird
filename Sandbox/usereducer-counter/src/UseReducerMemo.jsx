// useReducer



// useReducer Hooks함수:

// ---------------------------------------------------------------------------------reducer
// reducer: 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수.
const reducer = (현재상태state, 액션객체action) => {
    //새로운 상태를 만드는 로직
    // const 새로운상태nextState = ...
    return 새로운상태nextState
}

// 여기서, 액션객체는 업데이트를 위한 정보를 가지고 있다.
//     주로 type값을 지닌 객체 형태로 사용한다.


// ---------------------------------------------------------------------------------useReducer 리듀서 사용하기.

const [state, dispatch] = useReducer(reducer, initialState);
// state: 우리가 앞으로 컴포넌트에서 사용할 수 있는 상태.
// dispatch: 액션을 발생시키는 함수. dispatch({ type: 'INCREMENT' })
// =
// useReducer에 넣는
// 첫번째 파라미터: reducer 함수.
// 두번째 파라미터: 초기상태

