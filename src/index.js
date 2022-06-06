import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Produto from './Produto';
// import * as serviceWorker from './serviceWorker';
// import g,{y} from './arquivo_teste'; // como exportei x como default posso importá-lo com qualquer nome no caso g
// import [var],{var1, var2, var3};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Produto></Produto>
    <App></App>
    {/* passando um objeto através da props */}
    {/* <App minhaProp={{a:1, b:"string", c:"https://picsum.photos/200", d:"Olha! A foto muda"}}/> */}
    {/* passando uma string através da props */}
    {/* <App minhaProp="testando2"/> */}
    {/* <div>{g},{y}</div> */}
  </React.StrictMode>
);

// serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

