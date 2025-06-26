import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>
                Bem-vindo ao app de Calculadora IMC!
            </ThemedText>

            <ThemedText>
                O aplicativo Calculadora de IMC (Índice de Massa Corporal) foi
                desenvolvido para ajudar usuários a entenderem melhor sua
                condição física com base em dois dados simples: peso e altura.
            </ThemedText>
            <ThemedText>
                Ao inserir essas informações, o app calcula o IMC utilizando a
                fórmula padrão: IMC = peso (kg) / altura (m) * 2. ​O resultado é
                apresentado junto com uma classificação de saúde, como: Abaixo
                do peso, Peso normal, Sobrepeso, Obesidade e Obesidade grave.
            </ThemedText>
        </ThemedView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        gap: 20,
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        marginTop: 20,
        marginBottom: 20,
    },
});
