import React from "react";
import { Button } from "react-native";

interface CompProps {
    max: number;
    min: number;
    ale?: number;
    funcao: (valor: number, mensagem: string) => void; // Assinatura da função
}

const Filho: React.FC<CompProps> = (props) => {
  console.warn(props);
  const delta: number = props.max - props.min + 1;
  const ale: number =Math.round((Math.random() * delta) + props.min) ;
  
  // Chama a função com dois argumentos
  const executarFuncao = () => {
    if (props.funcao) {
      props.funcao(ale, "O valor é: ");
    }
  };

  return (
    <Button title="executar" onPress={executarFuncao} />
  );
};

export default Filho;
