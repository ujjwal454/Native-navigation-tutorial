import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Settings, SettingsDetail} from '../screens';
import {ROUTES} from '../constants';
const Stack = createStackNavigator();
const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Settings} name={ROUTES.SETTINGS} />
      <Stack.Screen component={SettingsDetail} name={ROUTES.SETTINGS_DETAIL} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;

const styles = StyleSheet.create({});
