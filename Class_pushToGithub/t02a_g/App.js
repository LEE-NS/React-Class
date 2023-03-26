import './App.css';
import Box from './Component/Box';
import { useState } from 'react';

const choiceImg = { 
  scissors: {
    name: "Scissors",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png'
  },
  rock: {
    name: "Rock",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png'
  },
  paper: {
    name: "Paper",
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_960_720.png'
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [resultIs, setResultIs] = useState('');

  const play = (userChoice) => {
    setUserSelect(choiceImg[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResultIs(judgement(choiceImg[userChoice], computerChoice));
  };
  const judgement = (user, computer) => {
    if (user.name == computer.name) return 'TIE';
    else if (user.name == 'Rock') 
      return computer.name == 'Scissors' ? 'WIN' : 'LOSE'; 
    else if (user.name == 'Scissors') 
      return computer.name == 'Paper' ? 'WIN' : 'LOSE'; 
    else if (user.name == 'Paper') 
      return computer.name == 'Rock' ? 'WIN' : 'LOSE'; 
    }
  /* 
  기본 로직 
  user == computer : tie
  user == rock, computer == paper : lose
  user == rock, computer == scissors : win
  ...
  */
  const randomChoice = () => {
    let itemArray = Object.keys(choiceImg) /* 객체의 key값을 배열화 */
    let randomItem = Math.floor(Math.random() * itemArray.length);/* 배열의 길이를 곱해서 나오는 결과값이 인덱스 값과 일치하도록 한다 */
    let final = itemArray[randomItem];
    return choiceImg[final]
  };

  return (
    <div>
      <div className="main">
        <Box title='You' item={userSelect} result={resultIs} />
        <Box title='Computer' item={computerSelect} result={resultIs} />
      </div>
      <div className='box'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
        {/* 콜백의 형태로 넣어줘야 미리 실행되는 것을 막을 수 있다. */}
      </div>
    </div>
  );
};

export default App;
