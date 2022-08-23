import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import PhoneInput from '../screens/PhoneInput/phoneInput';
import Otp from '../screens/Otp/otp';

const mainStack = createNativeStackNavigator();

const StackList = () => {
  return (
    <NavigationContainer>
      <mainStack.Navigator>
        <mainStack.Screen
          component={PhoneInput}
          name="Phone"
          options={{headerShown: false}}
        />
        <mainStack.Screen
          component={Otp}
          name="Otp"
          options={{headerShown: false}}
        />
        <mainStack.Screen component={HomeScreen} name="Home" />
      </mainStack.Navigator>
    </NavigationContainer>
  );
};

export default StackList;

const styles = StyleSheet.create({});
