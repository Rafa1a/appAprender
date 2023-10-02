import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Estilo  from '../stilo'
interface CompProps {
    num:number
};

const exemplo: React.FC<CompProps> = (props) => {
    return (
        <View style={style.conteiner}>
            <Text style={[style.num]}> {props.num}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    conteiner :{
        height: 50,
        width : 50,
        borderRadius:25,
        backgroundColor: '#000'
    },
    num: {
        padding:12.5,
        color : '#fff'
    }
})
export default exemplo;