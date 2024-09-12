import Input from './Input';
import Square from './Square';
import { useState } from 'react';

function App() {
  const [colourValue, setColourValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)


  return (
    <div className="App">
      <Square 
      colourValue={colourValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      />
      <Input 
      colourValue={colourValue}
      setColourValue={setColourValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
