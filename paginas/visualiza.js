import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Modal } from 'react-native';

function Visualiza() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [esportes, setEsportes] = useState([
    "Todos",
    "Futebol",
    "Volei",
    "Xadrez",
    "Basquete",
    "Handbol",
    "Truco",
    "Tenis",
    "Natação",
    "Corrida"
  ]);
  const [esporteAtual, setEsporteAtual] = useState(0);

  function handleOpenModal(item) {
    setSelectedItem(item);
    setShowModal(true);
  }

  function handleLast() {
    setEsporteAtual((prevEsporte) =>
      prevEsporte === 0 ? esportes.length - 1 : prevEsporte - 1
    );
  }

  function handleNext() {
    setEsporteAtual((prevEsporte) =>
      prevEsporte === esportes.length - 1 ? 0 : prevEsporte + 1
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#51AFF3' }}>
      {/* Cabeçalho e Título */}
      <View style={{ height: 85, backgroundColor: '#2759A4', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./LogoPrefeitura.png')} style={{ maxHeight: 65, maxWidth: 220, minHeight: 75, minWidth: 150 }} />
      </View>
      <Text style={{ color: '#F5F5F5', padding: 20, fontSize: 20, fontWeight: 'bold' }}>ATLETAS REGISTRADOS</Text>

      {/* Imagem */}
      <View style={{ alignItems: 'center', margin: 40 }}>
        <Image source={require('./Esporte.png')} style={{ borderRadius: 10, width: 200, height: 200 }} />
      </View>

      {/* Menu de seleção de esporte */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {/* Botão Anterior */}
        <TouchableOpacity
          style={{ height: 45, backgroundColor: '#51AFF3', borderRadius: 7, borderColor: '#2759A4', marginRight: 55, justifyContent: 'center', alignItems: 'center' }}
          onPress={handleLast}
        >
          <Text style={{ fontSize: 30, color: '#2759A4' }}>{'<'}</Text>
        </TouchableOpacity>

        {/* Nome do Esporte */}
        <Text style={{ color: '#F5F5F5', margin: 5, fontSize: 20 }}>{esportes[esporteAtual]}</Text>

        {/* Botão Próximo */}
        <TouchableOpacity
          style={{ height: 45, backgroundColor: '#51AFF3', borderRadius: 7, borderColor: '#2759A4', marginLeft: 55, justifyContent: 'center', alignItems: 'center' }}
          onPress={handleNext}
        >
          <Text style={{ fontSize: 30, color: '#2759A4' }}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        {/* Campo de Pesquisa */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TextInput
            style={{ borderRadius: 7, height: 30, width: 250, marginBottom: 20, borderColor: '#2759A4', borderWidth: 1, padding: 5 }}
            onChangeText={(text) => setSearch(text)}
            placeholder="Pesquisar"
          />
        </View>

        {/* Construção da lista */}
        <FlatList
          data={data.filter((item) => search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search))}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
              onPress={() => handleOpenModal(item)}
            >
              <View style={{ backgroundColor: '#51AFF3', borderRadius: 20, marginRight: 10 }}>
               
