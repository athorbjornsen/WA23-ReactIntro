import Mycomponent from './components/MyComponent';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import { useState } from 'react';

const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    console.log('cliiicked');
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log('change');
  };

  return (
    <div>
      <Food food={food} />
      <p>Read the README.md to see the tasks</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write here."
      />
      <Mycomponent />
      <Wrapper>
        <Title title="Test" />
      </Wrapper>
      <button onClick={handleButtonClick}>Button</button>
    </div>
  );
};

export default App;
