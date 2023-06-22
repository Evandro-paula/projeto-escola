import React from 'react';
import { StyleSheet, View, Dimensions, Image  } from 'react-native';
import Swiper from 'react-native-swiper';
import cabPrefeitura from '../components/CabPrefeituraLogo';
const { width } = Dimensions.get('window');

import CabPrefeituraLogo from '../components/CabPrefeituraLogo';


export default function Lobby() {

  return (
    <View style={styles.container}>

    <CabPrefeituraLogo />

      <Swiper style={styles.wrapper} autoplay={true} dotColor="#4682B4" activeDotColor="blue">
        <View style={styles.slide}>
          <Image
            source={{ uri: 'https://s2.glbimg.com/bHQm4t2lIIi8uYiccAq71ClONl4=/0x0:2048x1366/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/B/z/t4P0xjRl2y3QQADtdktg/48960616711-019d7ad84b-k.jpg' }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{ uri: 'https://www.novohamburgo.rs.gov.br/sites/pmnh/files/styles/800x800/public/noticia/2016/3140120160419SMELFutsal_JEC_5.jpg?itok=RX9V4Lse' }}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
           <Image
            source={{ uri: 'https://educacaointegral.org.br/wp-content/uploads/2016/08/gol_de_letra.jpg' }}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});