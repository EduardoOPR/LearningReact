import React from "react";

export default function Calculator(props){
    const calc=()=>{
        props.sr(props.p/(props.a*props.a))
    }
    return(
        <button onClick={calc}>Calcular</button>
    )
}
