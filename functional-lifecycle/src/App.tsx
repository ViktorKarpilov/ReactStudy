import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './label';
import ButtonsWindow from './buttonsWindow';

function App() {
  var [mounted, setMount] = useState(false);
  var [labels, setLabels] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    setLabels([...labels, <Label text="App mounted" color="green"/>]);
  }, [])

  const addLabelCallback = (element:React.ReactElement) => {
    setLabels([...labels, element])
  }

  const toggleButtonWindow = () => {
    setMount(!mounted);
  }

  const labelElements = labels.map(label => <li>{label}</li>);
  
  return (
    <div className="App">
      <br/>
      <button onClick={toggleButtonWindow}> Mount/Unmount window </button>
      <br/>
      {mounted && <ButtonsWindow addLabelCallback={addLabelCallback}/>}
      <ul>
        {labelElements}
      </ul>
    </div>
  );
}

export default App;
