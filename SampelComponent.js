import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Bagus />
      <Text>Valery</Text>
      <Text>Isla</Text>
      <Text>Ardi</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Bagus = () => {
  return <Text>Tubagus</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://img.beritasatu.com/cache/beritasatu/910x580-2/481448198846.jpg',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://img.beritasatu.com/cache/beritasatu/910x580-2/481448198846.jpg',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>Ini Budi</Text>
      </View>
    );
  }
}

export default SampleComponent;
