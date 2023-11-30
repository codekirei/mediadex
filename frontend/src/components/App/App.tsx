import { useState } from 'react';
import logo from '../../assets/images/logo-universal.png';
import { Greet } from "../../../wailsjs/go/demo/App";
import { app, logo as logoStyle, result, btn, input } from './App.css.ts'

function App() {
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState('');
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div className={app}>
      <img src={logo} className={logoStyle} alt="logo" />
      <div className={result}>{resultText}</div>
      <div>
        <input className={input} onChange={updateName} autoComplete="off" name="input" type="text" />
        <button className={btn} onClick={greet}>Greet</button>
      </div>
    </div>
  )
}

export default App
