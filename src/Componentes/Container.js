//função de exmeplo para mostrar a Contenção de tags

import React from "react";

export default function Container (props){
    
    return (
    <div>
        {props.children}
        {props.children[0]}
    </div>
    );
}