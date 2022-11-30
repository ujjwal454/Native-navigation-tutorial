import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigations from './src/navigations/AuthNavigations';
const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigations />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
