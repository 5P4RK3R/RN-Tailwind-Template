import React from 'react';
import {
    TextInput,
    View,
    StyleSheet
  } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const UserInput: React.FC<{name: string;}> = ({children, name}) => {
    return (
        <View >
        <TextInput
        style={[tw`my-4 py-4 bg-white rounded-md`,styles.TextStyle]}
        placeholder={name}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
      </View>
    )
}
export default UserInput;

const styles = StyleSheet.create({
  TextStyle:{
    paddingLeft: 50
  }
});