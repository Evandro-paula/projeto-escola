import React, { useState } from 'react';
import { SafeAreaView, View,  Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Input } from 'react-native-elements';
const avatar = require('../assets/logoEmblema.png');

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
  const handleRegister = () => {
    Linking.openURL('mailto:evandro.paula@a.unileste.edu.br?subject=Registro%20de%20Conta');
  };

  const handleResetPassword = () => {
    Alert.alert('Reiniciar Senha', 'Digite o seu endereço de e-mail para reiniciar a senha',)

    onPress: (email) => {

            console.log('Email:', email);
          };
  };

  return (
    <SafeAreaView style={stylesG.container}>
    <ScrollView >
      <View style={stylesG.container}>
        <Image source={avatar} style={stylesG.logoPrefeitura} />
      </View>
      <Card style={stylesG.card}>
        <Card.Divider />
        <Text style={stylesG.text}>Email</Text>
        <Input
          type="Text"
          placeholder="Email"
          style={stylesG.Input}
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={stylesG.text}>Senha</Text>
        <Input
          type="Text"
          placeholder="Senha"
          style={stylesG.Input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={stylesG.botao} onPress={ExisteEsseUsuario}>
          <Text style={stylesG.textoDoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={stylesG.linkText}>
            Ainda não tem uma conta? Registre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={stylesG.linkText}>
            Esqueceu a senha? Reinicie sua senha aqui
          </Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
    </SafeAreaView>
  );
}

const stylesG = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,


  },
  card: {
    backgroundColor: 'white',

  },

  text: {
    fontWeight: 'bold',
    padding: 10,


  },

  logoPrefeitura: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 5,
  },

  textoDoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Input: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#01A9DB',
    borderRadius: 5,
    marginTop: 1,
    padding: 10,
  },

  linkText: {
    color: 'blue',
    marginVertical: 0,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
