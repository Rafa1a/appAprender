// Comp.tsx
import React from "react";
import { Text } from "react-native";
import stilo from './stilo'

interface CompProps {
  max: string;
  min: string;
}

const Comp: React.FC<CompProps> = (props) => {
  console.warn(props);
  return (
    <Text style={stilo.fotg}>
      O valor máximo é {props.max} e o valor mínimo é {props.min}
    </Text>
  );
};

export default Comp;
