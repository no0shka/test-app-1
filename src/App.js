import { Fragment } from 'react/jsx-runtime';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count,setCount]= useState(0);
  const [val,setVal]=useState('');
  const referance=useRef();
  const maxval=useRef(false);
  useEffect(
()=>referance.current.focus()
,[count])

  useEffect(
    ()=>{
      setTimeout(()=>console.log('Effect'),3000);
    }
    ,[count]
  );
  function countUp(){
    if (!maxval.current){
      if(count>50){
        maxval.current=true;
      }
      else{
    return setCount(()=>count+(+referance.current.value || 1));
      }
    }
    else{
    console.log('renderd');
    }
  }
  return (
    <Fragment>

      <input onChange={(e)=>setVal(e.target.value)} />
      <p>{val}</p>
      <input ref={referance} />
      <p>{count}</p>
      <button onClick={countUp}>+</button>
    </Fragment>
  );
}



export default App;
