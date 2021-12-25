import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILHospitalBG} from '../../assets/ilustration';
import {colors, fonts} from '../../utils';
import {ListLibrary} from '../../component';
import {DummyHospital1, DummyHospital2} from '../../assets';

const Libraries = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Libraries</Text>
        <Text style={styles.desc}>2 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListLibrary
          type="Perpustakaan"
          name="Umum Penakluk Dunia"
          address="Jl. Jager Raya No.73"
          pic={DummyHospital1}
          onPress={() => navigation.navigate('DetailMap2')}
        />
        <ListLibrary
          type="Perpustakaan"
          name="Impian Bangsa"
          address="Jl. Bangsa No.79"
          pic={DummyHospital2}
          onPress={() => navigation.navigate('DetailMap')}
        />
      </View>
    </View>
  );
};

export default Libraries;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
