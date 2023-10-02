import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {
    nome : string;
    sobre: string;

};

const exemplo: React.FC<CompProps> = (props) => {
    return (
       
        <Text>
            {props.nome} {props.sobre}
        </Text>
        
    );
};
export default exemplo;