import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import UserInput from './Widgets/UserInput';
import UserButton from './Widgets/UserButton';
import SocialButton from './Widgets/SocialButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`h-full`}>
            <View style={tw`bg-green-500 my-6 h-60`}>
            </View>
            <View style={tw`flex flex-col my-4 mx-8`}>
              <View style={tw``}>
                <UserInput name='Enter Mobile Number'/>
                <UserInput name='Enter Password'/>
                <UserInput name='Confirm Password'/>
              </View>
              <UserButton name="Signup"/>
              <View style={tw`flex flex-row justify-center`}>
              <Text>Already a Member?</Text>
              <TouchableOpacity>
                <Text style={tw`text-green-500 font-medium`}> Sign In</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex flex-row justify-around`}>
              <SocialButton name="Google"/>
              <SocialButton name="FaceBook"/>
            </View>
       </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
