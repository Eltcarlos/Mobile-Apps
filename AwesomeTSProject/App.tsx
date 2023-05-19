import React from 'react';
// import BoxObjectModel from './src/screens/BoxObjectModel';
import {SafeAreaView} from 'react-native';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';

const App = () => {
  return (
    // Para que no choque en la pantalla
    <SafeAreaView style={{flex: 1}}>
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
