import { ChangeEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [lastN, setLastN] = useState("");
  const [fullN, setFullN] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {      

    setName(e.target.value);
  }

  const handleLastNChange = (e: ChangeEvent<HTMLInputElement>) => {

    setLastN(e.target.value);
  }

  useEffect(() =>{
    setFullN(`${name} ${lastN}`);
  }, [name, lastN]);
  return (
    <div>
      <input type= "text" placeholder='Seu NOME' value= {name} onChange={handleNameChange}/>
      <input type= "text" placeholder='Seu SOBRENOME' value= {lastN} onChange={handleLastNChange}/>
      <p>Nome Completo: {fullN}</p>
    </div>
  )
}

export default App
