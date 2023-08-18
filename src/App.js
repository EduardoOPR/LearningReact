import React, { Component, useState, useEffect } from 'react';
import Componente from './Componentes/Header'
import axios from 'axios'
//import Mapa from './Componentes/Mapa'
//import Form from './Componentes/Formulario'
//import FormUm from './Componentes/FormUmState'
//import PassStates from './Componentes/PassandoStates/PassandoStates'
//import Caixa from './Componentes/Container'
//import Localstorage from './Componentes/LocalStorage'
//import Construtor from './Componentes/ConstrutorState'
import Pagina1 from './Componentes/Paginas/Pagina1'
import Pagina2 from './Componentes/Paginas/Pagina2'
import Pagina3 from './Componentes/Paginas/Pagina3'
//import TabelaFiltroCarros from './Desafios/TabelaFiltroCarros'
//import CalcIMC from './Desafios/CalculadoraIMC'
//import CalcIMCMod from './Desafios/CalcIMCComponetizada/CalcIMCMod';
//import CalcIMCClass from './Desafios/CalcIMCClass/CalcIMCClass';
//import Calculadora from './Desafios/Calculadora';
//import JogoDaVelha from './Desafios/JogoDaVelha';
//import BaseClasse from './Componentes/BaseClasse';
import {Routes, Route, Link} from 'react-router-dom'
import Key from './Componentes/Key';

export default function App() {

  /*useEffect(
    ()=>{
      console.log("Página carregada")
    }
  )*/


  /*
  //Funções para aparecer umam ensagem de cumprimento (Bom dia/tarde/noite) de acorco com o horário e
  //botão para mudar a cor do texto de cumprimento quando clicado
  const [cor,setCor]=useState(1)

  const vermelho={color: '#f00'};const  verde={color: '#0f0'};const  azul={color: '#00f'};const  preto={color: '#000'}

  const retCor=(c)=>{
    if(c===1){
      return preto
    } else if (c===2){
      return vermelho
    } else if (c===3){
      return verde
    } else
     return azul
  }

  const mudarCor=()=>{
    setCor(cor+1)
    if(cor>3){
      setCor(1)
    }
  }

  const cumprimento=()=>{
    const hora = new Date().getHours();
    //console.log(hora);
    if(hora>0 && hora<13){
      return <p style={retCor(cor)}>Bom Dia</p>
    } else if(hora>=13 && hora < 18){
      return <p style={retCor(cor)}>Boa Tarde</p>
    } else {
      return <p> style={retCor(cor)}Boa Noite</p>
    }
  }
*/


/*
  //Navegação de páginas sem extensões
  const [pagina, setPagina]=useState(0)

  useEffect(()=>{
    const url=window.location.href;
    const res=url.split('?');
    setPagina(res[1]);
  })

  const LinksPaginas=(p)=>{
    if(p==1){
      window.open('http://localhost:3000?1','_self')
    } else if (p==2){
      window.open('http://localhost:3000?2','_self')
    }
  }
  //retornar essa função para ter a paginação
  const retornarPagina=()=>{
    if(pagina==1){
      return <Pagina1></Pagina1>
    } else if(pagina==2){
      return <Pagina2></Pagina2>
    } else {
      return  <div>
                {cumprimento()}
                <button onClick={()=>mudarCor()}>Mudar Cor</button>
                <Componente conteudo="Aprender React" soma={somar} />
                <Construtor fator="10"></Construtor>
                <button onClick={()=>LinksPaginas(0)}>Tela Inicial</button>
                <button onClick={()=>LinksPaginas(1)}>Página 1</button>
                <button onClick={()=>LinksPaginas(2)}>Página 2</button>
              </div>
    }
  }
*/


/*
// Consumindo dados de uma API

const [carros, setCarros]=useState([])

useEffect(()=>{
  axios.get('https://apireactexemplo1.eduardo-de-oliv.repl.co').then(res=>{
            const dadosCarros=res.data
            setCarros(dadosCarros)
        })
})


//ISSO VAI DENTRO DO RETURN
      <div>
        {carros.map(carro=><div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>)}
      </div>

*/


  return (
    <>
      <header>
        <Link to='/pag1'>Página 1</Link>
        <Link to='/pag2'>Página 2</Link>
        <Link to='/pag3'>Página 3</Link>
      </header>
      <main>
        <Routes>
          <Route path='/pag1' element={<Pagina1/>}></Route>
          <Route path='/pag2' element={<Pagina2/>}></Route>
          <Route path='/pag3' element={<Pagina3/>}></Route>
        </Routes>
      </main>
      <Key></Key>
    </>
  );
}

