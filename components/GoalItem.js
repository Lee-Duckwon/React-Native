import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const GoalItem = ({ item }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: 'gray',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
});
export default GoalItem;
