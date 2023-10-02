import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Estilo from '../stilo'

import produtos from './produtos'
interface CompProps {

};

const exemplo: React.FC<any> = (props) => {

    function obeterLista () {
        return (produtos.map(p => {
            return <Text key={p.id}>{p.id} ) {p.nome} Valor R$ {p.preco}</Text>
        }))
    }
    return (
        <>
        <Text style={Estilo.fotg}>Lista de Produtos</Text>
        {obeterLista()}
        </>
    );
};
export default exemplo;