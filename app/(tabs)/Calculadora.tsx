import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import Form from '@/components/Form';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Calculadora() {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{marginTop: 15, marginBottom: 70}}>Tela calculadora</ThemedText>
        <Form
          placeh1='Peso'
          placeh2='Altura'
        />

      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
