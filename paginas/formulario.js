import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';

import styles from '../styles/styleGlobal';

export default function SportsForm() {
  const [nomeEscola, setNomeEscola] = useState('');
  const [turma, setNomeTurma] = useState('');

  const [nomeAtleta, setNomeAtleta] = useState('');
  const [idadeAtleta, setIdadeAtleta] = useState('');
  const [sexoAtleta, setSexoAtleta] = useState('');
  const [alturaAtleta, setAlturaAtleta] = useState('');
  const [pesoAtleta, setPesoAtleta] = useState('');

  const [modalidade, setModalidade] = useState('');

  const handleSave = () => {
    alert(
      `Escola ${nomeEscola} / Turma ${turma} / Aluno ${nomeAtleta} / Idade ${idadeAtleta} / Sexo ${sexoAtleta} / Altura ${alturaAtleta} / Peso ${pesoAtleta} / Modalidade ${modalidade}`
    );
  };

  return (
    <View style={styles.container}>
  
    <ScrollView>
      <Card containerStyle={styles.card}>
        <Text style={styles.title}>Registro do Atleta</Text>

        <Card.Divider />

       
          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(255, 255, 0, 0.3)' })
            }>
            <Text style={styles.subtitle}>📚 Escola 🏫</Text>

            <Text>Escola</Text>
            <TextInput
              style={styles.input}
              value={nomeEscola}
              onChangeText={(text) => setNomeEscola(text)}
            />

            <Text>Turma</Text>
            <TextInput
              style={styles.input}
              value={turma}
              onChangeText={(text) => setNomeTurma(text)}
            />
          </Card>

          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(128, 0, 128, 0.3)' })
            }>
            <Text style={styles.subtitle}>⛹️‍♀️ Atleta 🚴‍♂️</Text>

            <Text>Nome</Text>
            <TextInput
              style={styles.input}
              value={nomeAtleta}
              onChangeText={(text) => setNomeAtleta(text)}
            />

            <Text>Idade</Text>
            <TextInput
              style={styles.input}
              value={idadeAtleta}
              onChangeText={(text) => setIdadeAtleta(text)}
            />

            <Text>Sexo</Text>
            <TextInput
              style={styles.input}
              value={sexoAtleta}
              onChangeText={(text) => setSexoAtleta(text)}
            />

            <Text>Altura</Text>
            <TextInput
              style={styles.input}
              value={alturaAtleta}
              onChangeText={(text) => setAlturaAtleta(text)}
            />

            <Text>Peso</Text>
            <TextInput
              style={styles.input}
              value={pesoAtleta}
              onChangeText={(text) => setPesoAtleta(text)}
            />
          </Card>

          <Card
            containerStyle={
              (styles.card, { backgroundColor: 'rgba(0, 0, 255, 0.3)' })
            }>
            <Text style={styles.subtitle}>⚽🏀 Modalidade 🏐🎯</Text>
            <Text>Modalidade</Text>
            <TextInput
              style={styles.input}
              value={modalidade}
              onChangeText={(text) => setModalidade(text)}
            />
          </Card>
  
        <Card.Divider />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Confirmar Cadastro</Text>
        </TouchableOpacity>
      </Card>
        </ScrollView>
    </View>
  );
}

const stylesG = StyleSheet.create({
 
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
