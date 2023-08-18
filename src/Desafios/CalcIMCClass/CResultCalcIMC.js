import React from "react";


export default class CResultCalcIMC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>Resultado: {this.props.r.toFixed(2)}</p>
            </div>
        )
    }
}