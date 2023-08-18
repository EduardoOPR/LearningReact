import React from "react";

export default function Relogio (){
    return <p className="Relogio">{new Date().toLocaleTimeString()}</p>
}