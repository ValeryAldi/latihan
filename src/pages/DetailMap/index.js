import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class DetailMap extends Component {
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
            latitude: -6.2045841,
            longitude: 106.8391617,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              latitude: -6.1990777717698355,
              longitude: 106.85120984031035,
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

export default DetailMap;
