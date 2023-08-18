import React,{useState} from "react";
import InputPeso from "./CInputPeso";
import InputAltura from "./CInputAltura";
import Calculator from "./CCalculator";
import ResultCalcIMC from "./CResultCalcIMC";
import TableCalcIMC from "./CTableCalcIMC";

export default function CalcIMCClass() {

    const [peso, setPeso]=useState(0);
    const [altura, setAltura]=useState(0);
    const [resultado, setResultado]=useState(0);

    return(
        <>
            <InputPeso p={peso} sp={setPeso}></InputPeso>
            <InputAltura a={altura} sa={setAltura}></InputAltura>
            <Calculator p={peso} a={altura} sr={setResultado}></Calculator>
            <ResultCalcIMC r={resultado}></ResultCalcIMC>
            <TableCalcIMC/>
        </>
    );
}