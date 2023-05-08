import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increase = () => {
    dispatch({type: "INCREMENT"});
  };
  return (
    <div>
      <p>숫자가 올라간다</p>
      <p>{count}</p>
      <button onClick={increase}>숫자 올리기</button>
      <Box />
    </div>
  );
}

export default App;

/* 
Redux

- State를 관리하는 라이브러리 
- action이 일어나면 reducer가 store를 건드려 action에 따른 상태 변화를 렌더링하여 보여줌

- redux core 설치, react redux 설치
- index.js에서 react.strictmode 대신 Provider 태그로 래핑 후 store를 props로 가져온다
- src에 redux 폴더를 만들어 store와 redux 스크립트를 생성
- store.js에서 createStore 훅을 가져와서 reducer를 가져오게끔 만들어둔다
- reducer.js에서 state와 action을 매개변수로 받는 reducer 함수를 생성, state는 값이 들어올 시 초기화가 되도록 설정
- reducer.js를 store.js로 수출
- store.js를 index.js로 수출 
*/
