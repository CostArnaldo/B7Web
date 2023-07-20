import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'


  const App = () => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [result, setR] = useState(0)
    
      
    
    const handleMinus = () => {
    setR(parseFloat(n1)-parseFloat(n2))
    }
    const handleMore = () => {
      setR(parseFloat(n1)+parseFloat(n2))
    }
    const handleMultiple = () => {
      setR(parseFloat(n1) * parseFloat(n2))
    }
    const handleDivision = () => {
      setR(parseFloat(n1) / parseFloat(n2))
    }
    
   
    
    
    return (
      <div>
        <input type="number" value= {n1} onChange= {(e)=> setN1(e.target.value)}></input>
        <input type="number" value= {n2} onChange= {(e)=> setN2(e.target.value)}></input>
        <input type="number" value= {result}></input> <br/>
        <div><button onClick={handleMinus}>-</button>
        <button onClick={handleMore}>+</button>
        <button onClick={handleMultiple}>*</button>
        <button onClick={handleDivision}>/</button>
        </div>
        
        

      </div>
    );
  }


export default App
