import logo from './logo.svg';
import './App.css';
import {Hello} from "./components/Hello"
import {useEffect, useState} from "react"
import { Counter } from './components/Counter';




function App() {

  const [show,setShow]=useState(true)
  
  return (
    <div className='App'>

    { show? <Hello/> :null}
    {show? <Counter/> :null}
    <button onClick={ ()=>{
      setShow(!show)
    }}>{show?"hide":"show"}</button>
    
    </div>
  )
}

export default App;
