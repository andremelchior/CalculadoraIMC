import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import StatusIMC from "./statusIMC";

interface Props {
    title: string;
}

export default function Form({ title }: Props) {
    const FORM = "";
    const [form1, setForm1] = useState(FORM);
    const [form2, setForm2] = useState(FORM);
    // let text = `${form1} ${form2}`;

    return (
        <View>
            <TextInput placeholder={title} onChangeText={setForm1} />
            <TextInput placeholder={title} onChangeText={setForm2} />

            <CustomButton
                title="Enviar"
                onPress={() => {
                    setForm1(`Input1: ${form1}.`);
                    setForm2(`Input2: ${form2}.`);
                }}
            />

            <StatusIMC
                resultado={(parseFloat(form1) / parseFloat(form2)) * 2}
            />
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
});
