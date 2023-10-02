import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import Estilo from '../stilo';
import Meganumero from './MegaNumero'
interface MegaProps {
  qtnumero: number;
}

export default class Mega extends React.Component<MegaProps> {
  
    state = {
      qtnumero: this.props.qtnumero ,
      numeros :[]
    };
    alterarqtnumero(qtde:number){
        this.setState({qtnumero : qtde})
    }
    gerarnumeronaocontido = (nums: number[]): number => {
        const novo = Math.round(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarnumeronaocontido(nums) : novo;
      };
      
      
      geranumeros() {
        const { qtnumero } = this.state;
      
        // Crie um novo array com o comprimento qtnumero e preencha-o com zeros
        const numeros: number[] = new Array(qtnumero).fill(0);
      
        // Preencha o array com valores gerados
        numeros.forEach((_, index) => {
          numeros[index] = this.gerarnumeronaocontido(numeros);
        });
      
        // Ordene o array de números
        numeros.sort((a, b) => a - b);
      
        this.setState({ numeros });
      }
      
      gerarcomponente = () => {
        const nums:number[] = this.state.numeros
        return nums.map(n => {
            return (<Meganumero num={n}/>)
        }) 
      }
      
  render() {
    return (
        <>
        <Text 
             style={Estilo.fotg}>Gerador de Mega-Sena {this.state.qtnumero}
        </Text>
        <TextInput
            keyboardType="numeric"
            style={{borderBottomWidth: 1}}
            placeholder="Qt de Numero"
            value={`${this.state.qtnumero}`}
            onChangeText={(qtde) => this.alterarqtnumero(Number(qtde))}
        ></TextInput>
        <Button title="gerar" onPress={() => this.geranumeros()}/>

        <View style={{
            marginTop: 20,
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent: "center"
        }}>
            {this.gerarcomponente()} 
        </View>

      </>
    );
  }
}
