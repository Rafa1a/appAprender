import React, {useState,useEffect,useReducer} from "react";
import { Text, FlatList} from "react-native";
import Estilo from '../stilo'

import produtos from './produtos'
interface CompProps {

};

const exemplo: React.FC<any> = (props) => {

   
    return (
        <>
        <Text style={Estilo.fotg}>Lista de Produtos</Text>
        <FlatList
            data={produtos}
            keyExtractor={i => `${i.id}`}
            renderItem={({item: p}) => {

                return <Text> {p.id} ) {p.nome} - {p.preco} </Text>
            }}
        />
        </>
    );
};
export default exemplo;