import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Familia from './componentes/Children/Familia'
import Membros from './componentes/Children/Membro'

// import Comp from "./componentes/Comp";
// import Aleatorio from "./componentes/Aleatório";
// import Botao from "./componentes/Button";
// import Pai from './componentes/indireto/Pai'
// import Lista from './componentes/produtos/ListaProduto';
// import Listav2 from './componentes/produtos/ListaProdutov2';
// import Input from './componentes/Digiteseunome'
import Flexboxv1 from './componentes/layout/Flexboxv1'
import Flexboxv2 from './componentes/layout/Flexboxv2'
import Flexboxv3 from './componentes/layout/Flexboxv3'
import Mega from './componentes/mega/Mega'
const App = () => (
  <SafeAreaView style={style.app}> 
   
    <Mega qtnumero={1}/>
    {/* 
  <Flexboxv3 />
  <Flexboxv1 />
    <Input/>
    <Listav2/>
    <Lista/>
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
