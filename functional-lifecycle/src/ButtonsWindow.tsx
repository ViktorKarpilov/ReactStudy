import React, { useEffect, useState } from 'react';
import Label from './label';

interface ButtonsWindowParams{
  addLabelCallback: (element: React.ReactElement) => void, 
}

export default function ButtonsWindow({ addLabelCallback }: ButtonsWindowParams){
  var [counter, setCounter] = useState(0);

  useEffect(() => {
    addLabelCallback(<Label text="window mounted" color="#8B8000"/>)

    return (() =>addLabelCallback(<Label text="window Unmounted" color="black"/>))
  }, [])
  
  const updateState = () => {
    setCounter(counter + 1);
    addLabelCallback(<Label text="window state updated" color="brown"/>)
  }
  
  return (<div id="buttons-window">
      <div>{counter}</div>
      <button onClick={updateState}> Increase counter (update state) </button>
    </div>)
}

