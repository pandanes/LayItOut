import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Ngantuk extends React.Component {
  static navigationOptions = {
    headerTitle: 'This is home where I belong',
    headerRight: (
      <Button
        onPress={() => alert("This is a button! Or at least that's what I think!")}
        title="Info"
        color="#000"
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 }}>Let's go home where I belong  😴</Text>
        </View>
    );
  }
}

export default Ngantuk