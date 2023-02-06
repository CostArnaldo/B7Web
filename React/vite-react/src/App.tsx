import {Header} from "./components/Header";
import { Photo } from "./components/Photo";
import { useState } from "react";


const App = () => {
  const [n, setN] = useState(0);
  const handleMinus = () => {
    setN(n-1);
  }
  const handleMore = () => {
    setN(n+1);
  }
  
  
  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <div>{n}</div>
      <button onClick={handleMore}>+</button>
    </div>
  )
}
/*const App = ()=> {
  const [nome, setName] = useState("Arnaldo");
  const handleClick= () => { 
    setName("Samanta");
    
};

return (
  
  <div>
    <Header title="Aqui fica o título"/>
    Olá mundo!
    <hr/>
    <Photo url="http://www.google.com.br/google.jpg" legend="Google"/>
    The name is:<br/>{nome}
    <button onClick={handleClick}>Clique teste</button>
  </div>
)
};*/




export default App;