import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choices = {
  rock: {
    name: "Rock",
    img: 'https://media.istockphoto.com/id/92713254/vector/seeing-stars.jpg?s=612x612&w=0&k=20&c=SK2iY2wSGu0HJAVIzzPTDdM7NY5rBnbCDGG_C31R8WE='
  },
  scissors: {
    name: "Scissors",
    img: 'https://www.onoffmarket.com/data/item/202004/1587366540_m'
  },
  paper: {
    name: "Paper",
    img: 'https://i.guim.co.uk/img/media/0a7bdf1fc39bd85b9727e5f9cd1efb6b482c48da/61_228_1591_954/master/1591.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2f181b906d68ab5850bd8195b4bf89c7'
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [resultIs, setResultIs] = useState('');

  const play = (userChoice) => {
    setUserSelect(choices[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResultIs(judgement(choices[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choices);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let computerPickIs = itemArray[randomItem];
    return choices[computerPickIs];
  };

  const judgement = (user, computer) => {
    if(user.name == computer.name) return 'TIE';
    else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'WIN' : 'LOSE'
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'WIN' : 'LOSE'
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'WIN' : 'LOSE'    
  };

  return (
    <div id='topWrap'>
      <div id='playerWrap'>
        <Box name="COM" item={computerSelect} result={resultIs} />
        <Box name="YOU" item={userSelect} result={resultIs} />
      </div>
      <div id='icons'>
        <button onClick={() => play('rock')}>
          {/* rock 아이콘*/}
          <img src='https://icomoon.io/iconsabf18a1/13/544.svg' />
        </button>
        <button onClick={() => play('scissors')}>
          {/* scissors 아이콘*/}
          <img src='https://icomoon.io/iconsabf18a1/13/546.svg' />
        </button>
        <button onClick={() => play('paper')}>
          {/* paper 아이콘*/}
          <img src='https://icomoon.io/iconsabf18a1/13/545.svg' />
        </button>
      </div>
    </div>
  );
}

export default App;
