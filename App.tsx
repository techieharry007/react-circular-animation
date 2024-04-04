import {View, Text} from 'react-native';
import React from 'react';
import CircularAnimation from './src/circular_animation';

const App: React.JSX.Element = () => {
  return (
    <View style={{flex: 1}}>
      <CircularAnimation />
    </View>
  );
};

export default App;
