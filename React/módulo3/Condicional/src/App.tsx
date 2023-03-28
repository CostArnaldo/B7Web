import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'






function App() {
  const [show, setShow] = useState(false)

  const handleClick = () =>{
    setShow(!show)
    /*setShow(true)*/ //mostra o valor, mas não é um toggle. 
     /*if(show) {           
      setShow(false);                 //toggle com if.
     }
      else {
        setShow(true)
      }*/ 
    }

  const teste = () =>{
    alert("FUNCIONANDO!")
  }

  return (
   
    <div>
      <header className='text-sky-500 p-10'>Renderizar Condicional</header>

      <button onClick={handleClick} >{show? "Ocultar":"Mostrar"}</button> 
      
      {show && <h2 className= "text-yellow-600 p-10">Funcionando</h2>
    }
    
      
    </div>
  )
  }

export default App
