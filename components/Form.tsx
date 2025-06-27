import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import StatusIMC from "./statusIMC";

interface Props {
    placeh1: string;
    placeh2: string;
}

export default function Form({ placeh1, placeh2 }: Props) {
    const FORM = "";
    const [form1, setForm1] = useState(FORM);
    const [form2, setForm2] = useState(FORM);
    const [status, setStatus] = useState(false);
    

    const statusResultado = () => setStatus(true);
    let imc;

    return (
        <View style={{flex: 1, gap: 20}}>
            <TextInput style={styles.input} placeholder={placeh1} onChangeText={x => {setForm1(x); setStatus(false)}} />
            <TextInput style={styles.input} placeholder={placeh2} onChangeText={x => {setForm2(x); setStatus(false)}} />

            <CustomButton
                title="Enviar"
                onPress={() => {
                    statusResultado()
                }}
            />
            {String(imc = Number(form1) / Number(form2) ** 2) != "lorem" && ""}

            {status && !isNaN(imc) && isFinite(imc) && (
                <StatusIMC
                    resultado={(Number(form1) / Number(form2) ** 2)}
                />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
  },
});
