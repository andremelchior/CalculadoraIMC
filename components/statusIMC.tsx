import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    resultado: number;
}

export default function StatusIMC({ resultado }: Props) {
    const status = function (result: number): string {
        if (result < 18.5) {
            return "Status IMC: Magro";
        } else if (result >= 18.5 && result <= 24.9) {
            return "Status IMC: Normal";
        } else if (result >= 25 && result <= 29.9) {
            return "Status IMC: Sobrepeso";
        } else if (result >= 30 && result <= 39.9) {
            return "Status IMC: Obesidade";
        } else {
            return "Status IMC: Obesidade Grave";
        }
    };

    return (
        <View>
            <Text>IMC: {resultado}</Text>
            <Text>{status(resultado)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
});
