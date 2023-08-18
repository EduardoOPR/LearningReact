import React from "react";

export default function Mapa (){
    const carros=['HRV', 'Gold', 'Focus', 'Cruze', 'Argo']
    const listaCarros=carros.map((c,i) => <li>{i} - {c}</li>)
    return(
        <>
            <ul>{listaCarros}</ul>
        </>
    );
}