import React,{useState} from "react";

const tabelaIMC=()=>{
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Abaixo do Peso</th>
                    <th>Abaixo de 18,5</th>
                </tr>
                <tr>
                    <th>Peso Normal</th>
                    <th>Entre 18,5 e 24,9</th>
                </tr>
                <tr>
                    <th>Sobrepeso</th>
                    <th>Entre 25 e 29,9</th>
                </tr>
                <tr>
                    <th>Obesidade Grau I</th>
                    <th>Entre 30 e 34,9</th>
                </tr>
                <tr>
                    <th>Obesidade Grau II</th>
                    <th>Entre 35 e 39,9</th>
                </tr>
                <tr>
                    <th>Obesidade Grau II</th>
                    <th>Maior que 40</th>
                </tr>
            </tbody>
        </table>
    )
}

const fpeso=(p, sp)=>{
    return(
        <div>
            <label>
                Peso
                <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}></input>
            </label>
        </div>
    )
}

const faltura=(a, sa)=>{
    return(
        <div>
            <label>
                Altura
                <input type="text" value={a} onChange={(e)=>{sa(e.target.value)}}></input>
            </label>
        </div>
    )
}

const fcalcular=(p,a,sr)=>{
    const calc=()=>{
        sr(p/(a*a))
    }
    return(
        <button onClick={calc}>Calcular</button>
    )
}

const fresultado=(r)=>{
    return(
        <div>
            <p>Resultado: {r.toFixed(2)}</p>
        </div>
    )
}

export default function CalculadoraIMC() {

    const [peso, setPeso]=useState(0);
    const [altura, setAltura]=useState(0);
    const [resultado, setResultado]=useState(0);

    return(
        <>
            {fpeso(peso,setPeso)}
            {faltura(altura,setAltura)}
            {fcalcular(peso,altura,setResultado)}
            {fresultado(resultado)}
            {tabelaIMC()}
        </>
    );
}