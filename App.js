import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [myGoal, setMyGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setMyGoal(enteredText);
  };

  const addGoalHandler = () => {
    // goalList에 추가 함수
    const checkList = goalList.filter((el) => el === myGoal);
    if (checkList.length === 0) {
      setGoalList((goalList) => [...goalList, myGoal]);
    }
    setMyGoal('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          value={myGoal.text}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Today's Goals ! !"
        />
        <Button onPress={addGoalHandler} title='Todo ADD!' />
      </View>
      <FlatList
        data={goalList}
        renderItem={(item) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.item}</Text>
          </View>
        )}
      />
      {/*어떤 데이터를 보여줄 것인가? -> goalList*/}
      {/* <ScrollView>
        {goalList?.map((el, index) => {
          return (
            <View style={styles.goalItem}>
              <Text key={index} style={styles.goalText}>
                {el}
              </Text>
            </View>
          );
        })}
      </ScrollView> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    backgroundColor: '#4267B2',
    width: 200,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
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
