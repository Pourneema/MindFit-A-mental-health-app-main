/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { View, Text,StyleSheet,SafeAreaView } from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
// eslint-disable-next-line eol-last
}