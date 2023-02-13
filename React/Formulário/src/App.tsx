import { useState } from "react";

const App = () => {
  
  const [n, setName] = useState ("nome")
  const [sn, setSobre] = useState ("sobrenome")
  const [i, setIdade] = useState ("")


  
  return (
    <div>
      <div>
        Nome: 
        <input type="text" value= {n} onChange= {(e)=> setName(e.target.value)}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value= {sn} onChange= {(e)=> setSobre(e.target.value)} />
      </div>

      <div>
        Idade:
        <input type="number" value= {i} onChange= {(e)=> setIdade(e.target.value)}/>
      </div>

      <hr/>

      Olá {n} {sn}, tudo bem?<br/>
      Você tem {i} anos.
    </div>
  );
}

export default App;