import React from "react";

export default class CCalculator extends React.Component{
    //Nem precisa desse construtor, tá só de exemplo
    constructor(){
        super();
        this.calc=this.calc.bind(this);
    }
    calc=()=>{
        const r = this.props.p/(this.props.a*this.props.a);
        this.props.sr(r)
    }
    render(){
        return(
            <button onClick={this.calc}>Calcular</button>
        )
    }
}
