import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Wallet, Notifications, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../constants';
import SettingsNavigation from './SettingsNavigation';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  console.log('running');
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, focused, size}) => {
          let iconName;
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen component={Home} name={ROUTES.HOME_TAB} />
      <Tab.Screen component={Wallet} name={ROUTES.WALLET} />
      <Tab.Screen component={Notifications} name={ROUTES.NOTIFICATIONS} />
      <Tab.Screen
        component={SettingsNavigation}
        name={ROUTES.SETTINGS_NAVIGATOR}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
