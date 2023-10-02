import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Familia from './componentes/Children/Familia'
import Membros from './componentes/Children/Membro'

import Comp from "./componentes/Comp";
import Aleatorio from "./componentes/Aleatório";
import Botao from "./componentes/Button";
import Pai from './componentes/indireto/Pai'

const App = () => (
  <SafeAreaView style={style.app}> 
    {/* 
    <Familia>
        <Membros nome={"rafa"} sobre={"leal"}/>
        <Membros nome={"renan "} sobre={"leal"}/>
    </Familia>
      <Pai  />
      <Botao numeros={100} passo={5} />
    <Botao  /> */}
    {/* <Comp max="3" min="10" /> */}
    {/* <Aleatorio max={10} min={1} ale={5} /> */}
    {/* <Button title="cocococ" onPress={() =>console.warn("rafa")}/> */}
  </SafeAreaView>
); 
    
const style = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default App;
