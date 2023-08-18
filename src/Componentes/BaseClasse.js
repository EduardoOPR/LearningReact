import React from "react";
import axios from 'axios';

export default class BaseClasse extends React.Component{
    constructor(props){
        //Para permitir o uso de props
        super(props)

        //State
        this.state={
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno,
            carros:[]
        }
        //this.status=this.props.status //Outra possibilidade
        let ad=this.ativarDesativar.bind(this) //bindando a função
        //Instruções do construtor
    }

    //Função para manipular state
    ativarDesativar(){
        this.setState(
            state=>({
                ativo: !state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('Carregou')
        axios.get('https://apireactexemplo1.eduardo-de-oliv.repl.co').then(res=>{
            const dadosCarros=res.data
            this.setState({carros:dadosCarros})
        })
    }

    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }

    componentWillUnmount(){
        console.log('O componente foi removido')
    }

    render(){
        return(
            <>
                <h1>Componente de Classe</h1>
                <button onClick={this.ad}>Ativar Desativar</button>
                <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
                <div>
                    {this.state.carros.map(carro=><div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>)}
                </div>
            </>
        )
    }

}