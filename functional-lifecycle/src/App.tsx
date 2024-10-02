import React, { useEffect, useState, useCallback } from 'react';
import './App.css';

import Label from './label';
import ButtonsWindow from './ButtonsWindow';
import { LabelList } from './LabelList';

function App() {
  const [mounted, setMount] = useState(false);
  const [labels, setLabels] = useState<React.ReactElement[]>([]);
  const [, forceRerender] = useState({});

  useEffect(() => {
    setLabels((current) => [...current, <Label text="App mounted" color="green" />]);
  }, []);

  const addLabelCallback = (element: React.ReactElement) => {
    setLabels([...labels, element]);
  };

  const toggleButtonWindow = () => {
    setMount(!mounted);
    setLabels([]);
  };

  console.log('## == <App /> rendered == ##');

  // const memoizedAddLabelCallback = useCallback((text: string) =>
  //   setLabels((current) =>
  //     [...current, <Label text={text} color="blue"/>]),
  //   []);

  const regularAddLabelCallback = (text: string) =>
    setLabels((current) => [...current, <Label text={text} color="blue" />]);

  return (
    <div className="App">
      <br />
      <button onClick={() => {
        forceRerender({})
        }}> Test rerender </button>
      <br />
      <button onClick={toggleButtonWindow}> Mount/Unmount window </button>
      <br />
      {mounted && <ButtonsWindow addLabelCallback={addLabelCallback} />}
      <LabelList labels={labels} onUpdated={regularAddLabelCallback} />
    </div>
  );
}

export default App;
