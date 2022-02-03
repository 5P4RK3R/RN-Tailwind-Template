import { StyleSheet,TouchableOpacity, Image, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const SocialButton: React.FC<{name: string;}> = ({children, name}) => {
  return (
    <View style={tw`my-4`}>
        {/* <Icon name="google"/> */}
        <TouchableOpacity
            style={tw`bg-gray-100 px-10 py-4 rounded-md border`}
            accessibilityLabel={name}>
            <Text style={tw`text-center text-black font-semibold`}>{name}</Text> 
        </TouchableOpacity>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({});
