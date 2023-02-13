import {Header} from "./components/Header";
import { Photo } from "./components/Photo";
import React, { useState } from "react";



  
  
const App = ()=> {
  const [nome, setName] = useState("");
  const handleClick= () => { 
    setName("Samanta");
}
  
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }  


return (
  
  <div>
  Nome: <input type= "text" value={nome} onChange= {handleInput}/>
    
    The name is:<br/>{nome}
    <button onClick={handleClick}>Clique teste</button> <hr/>
    <Photo url="http://www.google.com.br/google.jpg" legend="Google"/>
    
  </div>
  
)
};






export default App;