import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Pessoas} from "./components/Pessoas"

function App() {

  let list= [{name: "Pedro", age:35}, {name: "Daniel", age: 30}, {name: "Nicolas", age:30}, {name: "Vinicius", age:32}, {name: "Joel", age: 35}]
  

  return (
    <div>
<h1>Lista</h1>
<h2>LISTA COM NOMES</h2>
<ul>
  {list.map((item, index)=>(
    <Pessoas key={index} data= {item}/>
  ))}
  
</ul>
    </div>
  )
}

export default App
