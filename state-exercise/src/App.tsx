import ClickCounter from './components/ClickCounter';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
// import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

const App = () => {
  /* Your states here */
  const [isLightOn, setIsLightOn] = useState<boolean>(false)
  const [nums,setLottoNums] = useState<number[]>([])
  const [count, setCount] = useState<number>(0) 

  const handleLightToggle = () => {
    setIsLightOn(!isLightOn)
  }

  const handleLotto = () => {
    const nums = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 7) + 1
    )
    setLottoNums(nums)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle isLightOn={isLightOn} onToggle={handleLightToggle}/>
      <div style={{backgroundColor: isLightOn ? "white" : "black"}}>Change this background color using the style attribute</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onRandom={handleLotto}/>
      <div className="output"> {nums.join('/ ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter onCount={handleIncrement}/>
      <div className="output">Count: {count}</div>
    </div>
  );
};

export default App;