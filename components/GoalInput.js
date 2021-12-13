import React, { useState } from 'react';
import uuid from 'react-uuid';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ goalList, goalListHandler }) => {
  const [myGoal, setMyGoal] = useState({
    key: '',
    text: ''
  });

  const goalInputHandler = (enteredText) => {
    setMyGoal({
      key: '',
      text: enteredText
    });
  };

  const addGoalHandler = () => {
    // goalList에 추가 함수
    const addKeyWithText = {
      key: uuid(),
      text: myGoal.text
    };
    const checkList = goalList.filter((el) => el.text === myGoal.text);
    if (checkList.length === 0) {
      goalListHandler(addKeyWithText);
    }
    setMyGoal('');
  };

  return (
    <View style={styles.row}>
      <TextInput
        value={myGoal.text}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Today's Goals ! !"
      />
      <Button onPress={addGoalHandler} title='Todo ADD!' />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  textInput: {
    backgroundColor: '#4267B2',
    width: 200,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7
  }
});
export default GoalInput;
