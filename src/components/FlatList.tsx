import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatList = () => {
  return (
    <View>
      <Text style={styles.headerText}>FlatList</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  cardOne: {
    backgroundColor: 'red',
    border: '1px solid red',
  },
  cardTwo: {
    backgroundColor: 'green',
    border: '1px solid green',
  },
  cardThree: {
    backgroundColor: 'blue',
    border: '1px solid blue',
  },
});

export default FlatList;
