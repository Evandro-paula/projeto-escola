import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Input } from 'react-native-elements';
import logoPrefeitura from '../assets/LogoPrefeitura.png';


export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const ExisteEsseUsuario = () => {
    if (usuario === 'adm' && senha === '123') {
      navigation.navigate('Rotas'); // Navegar para a tela do menu após o login
    } else {
      alert('Usuário ou senha inválido');
    }
  };

  return (
<ScrollView> 
      <Card>
        <View >
          <Image source={logoPrefeitura} />
        </View>

        <Card.Divider />

        <Input
          type="Text"
          placeholder="Usuario"

          value={usuario}
          onChangeText={setUsuario}
        />

        <Input
          type="Text"
          placeholder="Senha"

          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity  onPress={ExisteEsseUsuario}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}

const stylesG = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jogaDladinho: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoPrefeitura: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 58,
    borderRadius: 5,
    backgroundColor: '#0000CD',

    marginTop: 20,
    marginBottom: 20,
  },

  textoDoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    fontSize: 20,
  }
});
