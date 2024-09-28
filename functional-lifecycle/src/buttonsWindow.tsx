import React, { useEffect, useState } from 'react';
import Label from './label';

interface ButtonsWindowParams{
  addLabelCallback: (element: React.ReactElement) => void, 
}

export default function ButtonsWindow(props: ButtonsWindowParams){
  var [state, setState] = useState(0);

  useEffect(() => {
    props.addLabelCallback(<Label text="window mounted" color="#8B8000"/>)

    return (() => props.addLabelCallback(<Label text="window Unmounted" color="black"/>))
  }, [])
  
  const updateState = () => {
    setState(state + 1);
    props.addLabelCallback(<Label text="window state updated" color="brown"/>)
  }
  
  return (<div id="buttons-window">
      <div>{state}</div>
      <button onClick={updateState}> Increase counter (update state) </button>
       
    </div>)
}

