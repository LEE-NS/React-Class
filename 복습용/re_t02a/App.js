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
    img: 'https://7gardeners.com/web/product/tiny/202302/e9e6bd4a459b7c84cdffe0b0a104118e.png'
  },
  paper: {
    name: "Paper",
    img: 'https://stopabusecampaign.org/wp-content/uploads/2018/10/Smack-hand.jpg'
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choices[userChoice]);
  };

  return (
    <div id='topWrap'>
      <div id='playerWrap'>
        <Box name="COM" item={userSelect} />
        <Box name="YOU" item={userSelect} />
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
