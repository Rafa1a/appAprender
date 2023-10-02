import React, {useState}from "react";
import { Button, Text } from "react-native";
import Filho from './Filho'


const Aleatorio: React.FC<any> = () => {
    const [num, setNum] = useState(0)
    const [text, settext] = useState("")
 
  function exibirvalor(numero:number,text:string) {
    setNum(numero)
    settext(text)
  }

  return (
    <><Text>{text} {num}</Text>
    <Filho max={100} min={0} funcao={exibirvalor} /></>
  );
};

export default Aleatorio;
 