import React from "react";

export default class CTableCalcIMC extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <table border='1' style={{borderCollapse:'collapse'}}>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Abaixo do Peso</th>
                        <th>Abaixo de 18,5</th>
                    </tr>
                    <tr>
                        <th>Peso Normal</th>
                        <th>Entre 18,5 e 24,9</th>
                    </tr>
                    <tr>
                        <th>Sobrepeso</th>
                        <th>Entre 25 e 29,9</th>
                    </tr>
                    <tr>
                        <th>Obesidade Grau I</th>
                        <th>Entre 30 e 34,9</th>
                    </tr>
                    <tr>
                        <th>Obesidade Grau II</th>
                        <th>Entre 35 e 39,9</th>
                    </tr>
                    <tr>
                        <th>Obesidade Grau II</th>
                        <th>Maior que 40</th>
                    </tr>
                </tbody>
            </table>
        )
    }
    
}