import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: "Blue" }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Inicio",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Calculadora"
                    options={{
                        title: "Calcular",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="calculator-outline"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
        </Tabs> 
    )
}