import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  Alert,
  StyleSheet,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World !</Text>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});
