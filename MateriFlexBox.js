import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Beranda</Text>
          <Text>Beranda</Text>
          <Text>Beranda</Text>
          <Text>Beranda</Text>
          <Text>Beranda</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://www.kibrispdr.org/data/gambar-sasuke-devil-5.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sasuke Devil</Text>
            <Text>Anak Ilang</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
