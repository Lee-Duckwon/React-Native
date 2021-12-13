import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
//import uuid from 'react-uuid';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const goalListHandler = (key) => {
    setGoalList((goalList) => [...goalList, key]);
  };
  return (
    <View style={styles.container}>
      <GoalInput goalList={goalList} goalListHandler={goalListHandler} />
      <FlatList
        data={goalList}
        renderItem={(item) => <GoalItem item={item.item.text} />}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
