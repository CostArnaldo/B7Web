import React, { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import {Movie} from "./types/Movie"




function App() {
  const [name, setName] = useState("");
  const [lastN, setLastN] = useState("");
  const [fullN, setFullN] = useState("");
 
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  
  const loadmovies = async () => {
    setloading(true)
    let response = await fetch("https://api.b7web.com.br/cinema/");
    let json = await response.json();
    setloading(false);
    setMovies(json);
    
    };



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
    <div className='conteudo'>
      <input className='nome' type= "text" placeholder='Seu NOME' value= {name} onChange={handleNameChange}/>
      <input className='sobrenome' type= "text" placeholder='Seu SOBRENOME' value= {lastN} onChange={handleLastNChange}/>
      <p className='nomeC'>Nome Completo: {fullN}</p> <hr />
      <button className="botao" onClick={loadmovies}>Carregar Filmes</button>
      
      <div className='movies'>
      
      {loading && <div className='load'>Carregando...</div>}
        
        {!loading && movies.length &&
        <div>Total de Filmes: {movies.length}
        
        <div  className='listMovies'>
          
          {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} className="imagem"/>
                {item.titulo}
              </div>
          ))}
        </div> </div> }
    </div>
    </div>
  )
}

export default App
