import Mycomponent from './components/MyComponent';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import { useState } from 'react';
import AlarmInputStuff from './components/AlarmInputStuff';


const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>    
      <Mycomponent />
      <p>And these are a few of my favourite things...</p>   
      <Food food={food} />     
                   
      <AlarmInputStuff inputValue={inputValue} setInputValue={setInputValue} />
      {inputValue}          
    </div>    
  );
};

export default App;
