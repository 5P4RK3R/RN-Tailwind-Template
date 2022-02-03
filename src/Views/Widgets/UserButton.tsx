import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
const UserButton: React.FC<{name: string;}> = ({children, name}) => {
  return (
    <View style={tw`my-4`}>
        <TouchableOpacity
            style={tw`bg-green-500 px-10 py-4 rounded-md`}
            // color="#56B25C"
            accessibilityLabel={name}
            >
            <Text style={tw`text-center text-white font-semibold`}>{name}</Text> 
        </TouchableOpacity>
    </View>
  );
};

export default UserButton;

const styles = StyleSheet.create({});
