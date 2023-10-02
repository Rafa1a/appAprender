import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import Quadrado from './Quadrado'
interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <View style={style.Flexv1}>
            <Quadrado cor = '#ff801a'/>
            <Quadrado cor = '#50d1f6'/>
            <Quadrado cor = '#dd22c1'/>
            <Quadrado cor = '#8312ed'/>
            <Quadrado cor = '#36c9a7'/>
        </View>
    );
};
export default exemplo;

const style = StyleSheet
.create ({
    Flexv1 : {
        flexGrow: 1,
        justifyContent: "space-evenly",
        backgroundColor:'#000'
    }
}) 