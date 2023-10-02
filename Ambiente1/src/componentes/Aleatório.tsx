// Comp.tsx
import React from "react";
import { Text } from "react-native";
import stilo from './stilo'

interface CompProps {
    max: number;
    min: number;
    ale:number
}

const Aleatorio: React.FC<CompProps> = (props) => {
  console.warn(props);
  const delta:number  = props.max - props.min + 1
  const ale:number = (Math.random() * delta)+ props.min;
  return (
    <>
    <Text style={stilo.fotg}>
      O valor aleatorio é {parseInt(ale.toString())}
    </Text>
    <Text style={stilo.fotg}>
    O valor aleatorio é {parseInt(ale.toString())}
  </Text>
  </>
  );
};

export default Aleatorio;
