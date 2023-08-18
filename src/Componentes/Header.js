//Página padrão de quando um projeto de js é criado

import React, {useState} from "react";
import logo from '../logo.svg';
import '../App.css';
import Numero from './Numero'

export default function Header(props){
    let n1 = 10
    let n2 = 20

    //State
    const [num,setNum]=useState(10) 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          {"O valor de num em Header é: " + num}
          <Numero setNum={setNum} num={num}></Numero>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.conteudo}
          <br/>
          {"A soma foi =" + props.soma(n1,n2)}
        </a>
      </header>
    </div>
  );
}
/*
const formatacao={
    color:'#f00', 
    fontSize:'5em'
};

<h1 style={formatacao}></h1>
*/