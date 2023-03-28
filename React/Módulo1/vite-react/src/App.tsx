import {Header} from "./components/Header";
import { Photo } from "./components/Photo";
import React, { useState } from "react";
import { Botao } from "./components/Botao";




  
  
const App = ()=> {
  const [nome, setName] = useState("");
  const handleClick= () => { 
    setName("Samanta");
}
  
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }  

  const botaoAction= () => { 
  /*const botaoAction= (txt: string) ={
    alert("Frase da função: " + txt)
  }*/
  alert("funcionando")

  }

return (
  
  <div>
<Header/>

  Nome: <input type= "text" value={nome} onChange= {handleInput}/>
    
    The name is:<br/>{nome}
    <button onClick={handleClick}>Clique teste</button> <hr/>
    <Photo url="http://www.google.com.br/google.jpg" legend="" />
    <div>
    <Botao text= "Click" click= {botaoAction}/>
    </div>
    
  </div>
  
)
};






export default App;