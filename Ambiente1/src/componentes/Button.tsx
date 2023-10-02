import React, { useState } from "react";
import { Button, Text } from "react-native";
import stilo from './stilo'

interface CompProps {
    numeros?: number;
    passo?: number;
}

const func: React.FC<CompProps> = ({ numeros=0, passo=1 }) => {
    
    const [numero, setNumero] = useState(numeros); // Inicialize o estado com o valor inicial
    
    const inc = () => setNumero(numero + passo); // Atualize o estado para o próximo número
    const dec = () => setNumero(numero - passo); // Atualize o estado para o número anterior
    
    return (
        <>
            <Text style={stilo.fotg}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    );
};

export default func;
