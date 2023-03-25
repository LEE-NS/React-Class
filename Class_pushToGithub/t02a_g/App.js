import './App.css';
import Box from './Component/Box';
import { useState } from 'react';

const choiceImg = {
  rock: {
    name: "Rock",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png'
  },
  scissors: {
    name: "Scissors",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png'
  },
  paper: {
    name: "Paper",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_960_720.png'
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choiceImg[userChoice]);
    let computerChoice = randromChoice();
  };
  const randromChoice = () => {
    let randomItem = Math.random();
    console.log('랜덤?', randomItem);
  };
  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        <Box title='Computer' item={computerSelect} />
      </div>
      <div className='box'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
        {/* 콜백의 형태로 넣어줘야 미리 실행되는 것을 막을 수 있다. */}
      </div>
    </div>
  );
}

export default App;
