interface LabelProps{
  text: string,
  color: string, 
  
}

export default function Label(props: LabelProps){
  const style = { color: props.color };
  
  return (<div className="label" style={style}> {props.text} </div>)
}
