import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class DetailMap2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <MapView
          style={Styles.map}
          initialRegion={{
            latitude: -6.1902975,
            longitude: 106.8367075,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              latitude: -6.190052171054556,
              longitude: 106.83889619714938,
            }}
          />
        </MapView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  wrapper: {...StyleSheet.absoluteFillObject},
  map: {...StyleSheet.absoluteFillObject},
});

export default DetailMap2;
