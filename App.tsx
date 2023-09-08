import React from 'react';
import {SafeAreaView, Text, Button, View, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Button
          onPress={() => {
            Alert.alert('You clicked me');
          }}
          title="Press Me"
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
