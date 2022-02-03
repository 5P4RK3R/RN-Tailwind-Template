import React from 'react';
import {
    TextInput,
    View
  } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const UserInput: React.FC<{name: string;}> = ({children, name}) => {
    return (
        <View >
        <TextInput
        style={tw`my-4 py-4 bg-white rounded-md`}
        placeholder={name}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
      </View>
    )
}
export default UserInput;