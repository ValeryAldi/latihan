import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from './cart.png';

const PositionReactNative = () => {
  return (
    <View style={styleS.wrapper}>
      <View style={styleS.cartWrapper}>
        <Image source={cart} style={styleS.iconCart} />
      </View>
      <Text style={styleS.text}>Keranjang Belanjaan Anda</Text>
    </View>
  );
};

export default PositionReactNative;

const styleS = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#439bd1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
});
