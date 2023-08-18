import React, { useState } from "react";
import Nota from "./Nota"
import Result from "./Resultado"

export default function PassandoStates (){


    const [notas, setNotas]=useState({"nota1": "0","nota2": "0","nota3": "0","nota4": "0"})

    const handleNotas=(e)=>{
        if(e.target.getAttribute('name')==='nota1'){
            setNotas({"nota1":e.target.value, "nota2": notas.nota2, "nota3": notas.nota3 ,"nota4": notas.nota4})
        } else if (e.target.getAttribute('name')==='nota2'){
            setNotas({"nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3 ,"nota4": notas.nota4})
        } else if (e.target.getAttribute('name')==='nota3'){
            setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value ,"nota4": notas.nota4})
        } else if (e.target.getAttribute('name')==='nota4'){
            setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3 ,"nota4": e.target.value})
        }
            
    }

    /*
    const [nota1, setNota1]=useState(0)
    const [nota2, setNota2]=useState(0)
    const [nota3, setNota3]=useState(0)
    const [nota4, setNota4]=useState(0)
    */
    return (
        <>
            <Nota num={1} name={'nota1'} nota={notas.nota1} setNota={handleNotas}></Nota>
            <Nota num={2} name={'nota2'} nota={notas.nota2} setNota={handleNotas}></Nota>
            <Nota num={3} name={'nota3'} nota={notas.nota3} setNota={handleNotas}></Nota>
            <Nota num={4} name={'nota4'} nota={notas.nota4} setNota={handleNotas}></Nota>
            <Result somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}></Result>
        </>
        /*
        <>
            <Nota num={1} nota={nota1} setNota={setNota1}></Nota>
            <Nota num={2} nota={nota2} setNota={setNota2}></Nota>
            <Nota num={3} nota={nota3} setNota={setNota3}></Nota>
            <Nota num={4} nota={nota4} setNota={setNota4}></Nota>
            <Result somaNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}></Result>
        </>
        */
    );

}