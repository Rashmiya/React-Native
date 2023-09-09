import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headerText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.card2]}>
            <Text>Two</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text>Three</Text>
          </View>
          <View style={[styles.card, styles.card4]}>
            <Text>Four</Text>
          </View>
          <View style={[styles.card, styles.card5]}>
            <Text>Five</Text>
          </View>
          <View style={[styles.card, styles.card6]}>
            <Text>Six</Text>
          </View>
          <View style={[styles.card, styles.card7]}>
            <Text>Seven</Text>
          </View>
          <View style={[styles.card, styles.card8]}>
            <Text>Eight</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 15,
    marginTop: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    borderRadius: 10,
    margin: 5,
    width: 100,
    height: 100,
  },
  card2: {
    backgroundColor: '#FFFFFF',
  },
  card3: {
    backgroundColor: '#FFFFFF',
  },
  card4: {
    backgroundColor: '#FFFFFF',
  },
  card5: {
    backgroundColor: '#FFFFFF',
  },
  card6: {
    backgroundColor: '#FFFFFF',
  },
  card7: {
    backgroundColor: '#FFFFFF',
  },
  card8: {
    backgroundColor: '#FFFFFF',
  },
});
