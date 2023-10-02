import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    const lado = 50;
    return (
        <View
            style={{
                height:lado,
                width : lado,
                backgroundColor: props.cor || '#000'
                

            }}
        />
    );
};
export default exemplo;