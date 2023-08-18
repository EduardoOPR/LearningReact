import React from "react";

export default class ConstrutorState extends React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV';
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        //this.setState({ligado:!this.state.ligado})
        this.setState((state)=>({
            ligado:!state.ligado}
            )
        )
    }
    acelerar(){
        this.setState((state, props)=>({velAtual:parseFloat(state.velAtual) + parseFloat(props.fator)}))
    }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <button onClick={()=>this.ligarDesligar()}>Ligar/Desligar Carro</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </div>
        );
    }
}