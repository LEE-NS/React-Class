import './App.css';
import { useState } from 'react';
import Box from './component/Box';


function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter는?", counter, "counter2는?", counter2); //비동기처리로 인해 여기서 콘솔에 띄우면 웹페이지에 나타나는 값과 다르게 나타난다.
  };
  return (
    <div>
      <div>{counter}</div>
      <div>state : {counter2}</div>
      <button onClick={increase}>click 2</button>
      <Box name="돼지" num="1"/>
    </div>
  );
};

export default App;

//npx create-react-app 폴더이름
//npm start
//컴포넌트 생성
//rafce
//es7 + react 확장프로그램
//컴포넌트의 이름은 반드시 대문자로 시작