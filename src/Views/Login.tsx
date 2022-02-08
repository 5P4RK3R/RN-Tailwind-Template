import React from 'react';
import {
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import UserInput from './Widgets/UserInput';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import UserButton from './Widgets/UserButton';
import SocialButton from './Widgets/SocialButton';
// import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const {auth} = useSelector(selectAuth); // returns the current state of the store for the selected data
  // useEffect(()=>{ // trigger events after render
  //   dispatch(fetchAuth(showId))
  //   return () => {} // clean/ unsubscribe the events and avoid memory leaks
  // },[dispatch,auth]) 
    return (
        <View style={tw`h-full`}>
            <View style={tw`bg-green-500 my-6 h-80`}>
            </View>
            <View style={tw`flex flex-col my-4 mx-8`}>
              <View style={tw``}>
                <UserInput name='Enter Mobile Number'/>
                <UserInput name="Enter Password"/>
              </View>
              <UserButton name="Login"/>
              <View style={tw`flex flex-row justify-center`}>
              <Text>New Here?</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('Signup') }>
                <Text style={tw`text-green-500 font-medium`}> Sign Up</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={tw` flex flex-row justify-around`}>
              <SocialButton name="Google"/>
              <SocialButton name="FaceBook"/>
            </View>       
      </View>
    )
}
export default Login;

const styles = StyleSheet.create({
  InputContainer:{
    
  }
});
