import React,{useState} from "react";
import InputPeso from "./InputPeso";
import InputAltura from "./InputAltura";
import Calculator from "./Calculator";
import ResultCalcIMC from "./ResultCalcIMC";
import TableCalcIMC from "./TableCalcIMC";

export default function CalcIMCMod() {

    const [peso, setPeso]=useState(0);
    const [altura, setAltura]=useState(0);
    const [resultado, setResultado]=useState(0);

    return(
        <>
            <InputPeso p={peso} sp={setPeso}></InputPeso>
            <InputAltura a={altura} sa={setAltura}></InputAltura>
            <Calculator p={peso} a={altura} sr={setResultado}></Calculator>
            <ResultCalcIMC r={resultado}></ResultCalcIMC>
            {TableCalcIMC()}
        </>
    );
}