import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <>
        <Text>test</Text>
        {props.children}
        </>
    );
};
export default exemplo;