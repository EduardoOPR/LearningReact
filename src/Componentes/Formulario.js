//Função mostrando como trabalhar com um formulário através de um State para cada item, ver o FormUmState que é melhor

import React, {useState} from "react";

export default function Formulario (){

    const [nome, setNome]=useState('')
    const [carro, setCarro]=useState('HRV')
    //const handleChangeNome=(e)=>{setNome(e.target.value)} forma alternativa para caso não se queira utilizar o setNome dentro do código
return (
    <>
        <label>Digite seu Nome</label>
        <input type="text" 
            name="fnome" 
            value={nome} 
            onChange={(e)=>setNome(e.target.value)}>
        </input>
        <p>Nome digitado: {nome}</p>
        <label>Selecione um carro</label>
        <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
            <option value="HRV">HRV</option>
            <option value="Golf">Golf</option>
            <option value="Cruze">Cruze</option>
            <option value="Argo">Argo</option>
        </select>
        <p>Carro Selecionado: {carro}</p>
    </>
);
}