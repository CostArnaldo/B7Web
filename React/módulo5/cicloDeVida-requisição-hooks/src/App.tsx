import React, { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import {Movie} from "./types/Movie"



function App() {
  const [name, setName] = useState("");
  const [lastN, setLastN] = useState("");
  const [fullN, setFullN] = useState("");
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const loadmovies = () => {
    fetch("https://api.b7web.com.br/cinema/")
    .then((response) => {
    
        return response.json();
    })
    .then ((json) => {
        setMovies(json);
    });
}


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
      <hr/>
      <div>
        <button className="botao" onClick={loadmovies}>Carregar Filmes</button>

        Total de Filmes: {movies.length}
        <div  className='listMovies'>
          {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} className="imagem"/>
                {item.titulo}
              </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default App
