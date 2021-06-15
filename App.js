import React from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import SampleComponent from './SampelComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
