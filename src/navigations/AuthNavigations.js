import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register} from '../screens';
import {COLORS, ROUTES} from '../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from './BottomNavigation';
import SettingsNavigation from './SettingsNavigation';
import DrawerNavigation from './DrawerNavigation';
const AuthNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen component={Login} name={ROUTES.LOGIN} />
      <Stack.Screen component={Register} name={ROUTES.REGISTER} />
      <Stack.Screen
        component={ForgotPassword}
        name={ROUTES.FORGOT_PASSWORD}
        options={({route}) => ({
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        component={DrawerNavigation}
        name={ROUTES.HOME}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigations;

const styles = StyleSheet.create({});
