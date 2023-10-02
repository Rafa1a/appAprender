import React, {useState,useEffect,useReducer} from "react";
import { Text, TextInput, SafeAreaView} from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    const [nome, setNome] = useState('teste')
    return (
        <SafeAreaView>
        <Text>{nome}</Text>
        <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
        />
        </SafeAreaView>
    );
};
export default exemplo;