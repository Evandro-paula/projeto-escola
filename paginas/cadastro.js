import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import CabPrefeituraLogo from '../components/CabPrefEmblema';
const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode implementar a lógica de persistência dos dados
  };

  const validarCampos = () => {
    // Aqui você pode implementar a lógica de validação dos campos
  };

  return (

    <View style={styles.container}>
        <CabPrefeituraLogo />
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      <Input
        label="Nome completo"
        placeholder="Digite seu nome completo"
        value={nome}
        onChangeText={setNome}
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />

      <Input
        label="Matrícula"
        placeholder="Digite sua matrícula"
        value={matricula}
        onChangeText={setMatricula}
        leftIcon={{ type: 'font-awesome', name: 'id-badge' }}
      />

      <Input
        label="Email"
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />

      <Input
        label="Telefone"
        placeholder="Digite seu telefone"
        value={telefone}
        onChangeText={setTelefone}
        leftIcon={{ type: 'font-awesome', name: 'phone' }}
      />

      <Input
        label="Senha"
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry
      />

      <Input
        label="Confirme sua senha"
        placeholder="Digite novamente sua senha"
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        onPress={() => {
          validarCampos();
          handleCadastro();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Cadastro;
