import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import cewe from './745.jpg';
import SampleComponent from './SampelComponent';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={cewe}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Valerie Isla
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Banyak Duit
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Chat
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReactNativeComponent;
