import React from 'react';
import {
  View, 
  Text, 
  StyleSheet,  
  TouchableOpacity,
} from 'react-native'
import Form from './src/components/Form/Index'
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Form></Form>
      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.buttonTable} onPress={() => navigation.navigate('Tabela de IMC')}>
          <Text style={styles.textButtonTable}>Tabela IMC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TabelaIMC() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Classificação</DataTable.Title>
          <DataTable.Title>IMC</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Abaixo do Peso</DataTable.Cell>
          <DataTable.Cell>Abaixo de 18,5</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Peso Normal</DataTable.Cell>
          <DataTable.Cell>18,5 - 24,9</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Sobrepeso</DataTable.Cell>
          <DataTable.Cell>25 - 29,9</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Obesidade Grau I</DataTable.Cell>
          <DataTable.Cell>30 - 34,9</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Obesidade Grau II</DataTable.Cell>
          <DataTable.Cell>35 - 34,9</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Obesidade Grau I / Mórbida</DataTable.Cell>
          <DataTable.Cell>Maior ou Igual a 40</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora de IMC" component={HomeScreen} />
        <Stack.Screen name="Tabela de IMC" component={TabelaIMC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
  areaButton:{
    paddingBottom: 10
  },
  buttonTable:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#120A8F",
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 220,
    marginTop: 5,
  },
  textButtonTable:{
    fontSize: 20,
    color: "#ffffff",
  },
});

export default App