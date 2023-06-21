import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CabPrefeituraLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LogoPrefeitura.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#4682B4',
  },
  image: {
    width: width * 0.6,
    height: '100%',
  },
});

export default CabPrefeituraLogo;