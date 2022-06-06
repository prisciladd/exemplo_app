import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MeuComponente from './MeuComponente';

// function App(props) { //recebendo a props passada no index
function App() { 

  // const acaoDoBotao = ()=>{
  //   alert('Evento disparado')
  // }

const [hora, setHora] = useState(new Date()); //definindo 2 variáveis com estado inicial um objeto do tipo Date


setInterval(() => {
  setHora(new Date()); //atualizado o estado inicial a cada 1000 milisegundos com setInterval
}, 1000);

// const [texto, setTexto] = useState("")
const clicou = () =>{
  // setTexto("Clicou no botão!")
  alert("Usuário clicou no botão!")
}

let f = <a href="https://www.fiap.com.br">Fiap</a>

const criaLink = (nome,url) =>{
  return <a href={url}>{nome}</a>
}

let v = [1,2,3,4,5]
let h = v.map((valor,indice) => {
  return <li key={indice}>{valor}</li>
})

  return (
    <div className="App">
      <header className="App-header">
        {/* <MeuComponente texto="Clique Aqui!" funcao={acaoDoBotao}></MeuComponente> */}
        <MeuComponente titulo="Este é o título">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </MeuComponente>
        <div>
          <div><ul>{h}</ul></div>
        </div>
        
        <div>{criaLink("Fiap", "http://www.fiap.com.br")}</div>
        <div>{criaLink("Google", "http://www.google.com.br")}</div>
        <div>
          <div>O link da {f}</div>
          <div>Outro link da {f}</div>
        </div>

        <input type="button" value="Clique Aqui" onClick={(clicou)} />
        {/* <div>{texto}</div> */}
        {/* exibindo o estado atual de hora */}
        <p>Hora: {hora.toLocaleTimeString()}</p> 
        {/* exibindo a props dentro da tag p */}
        {/* <p>{props.minhaProp.a}</p>  */}
        {/* <p>{props.minhaProp.b}</p>  */}
        {/* <img src={props.minhaProp.c} alt="testeProps"/> */}
        {/* {props.minhaProp.d} */}
        
     
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
