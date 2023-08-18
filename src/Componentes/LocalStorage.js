import { useState } from "react";

//localStorage.setItem("nome", "Eduardo") // adiciona("chave","valor") ao local storage
//localStorage.setItem("nome", "Oliveira") //substitui o conteúdo caso a chave seja repetida
//localStorage.getItem("nome") // recebe o conteúdo referente a chave "nome"
//localStorage.removeItem("nome") // // remove o conteúdo referente a chave "nome"

export default function LocalStorage (){

    const [nome,setNome] = useState()

    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }

    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }

    const remover=(chave)=>{
        localStorage.removeItem(chave)
    }

    return (
        <>
            <label Digite um nome></label>
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
            <button onClick={()=>armazenar('ls_nome', nome)}>Gravar Nome</button>
            <button onClick={()=>consultar('ls_nome')}>Consultar nome</button>
            <button onClick={()=>remover('ls_nome')}>Remover nome</button>
        </>
    );
}