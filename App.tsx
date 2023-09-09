import {View} from 'react-native';
import React from 'react';
import FlatList from './src/components/FlatList';
import ElevatedCards from './src/components/ElevatedCards';

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      <FlatList />
      <ElevatedCards />
    </View>
  );
};

export default App;
