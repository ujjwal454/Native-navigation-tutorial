import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Wallet, Settings, Notifications} from '../screens';
import {ROUTES} from '../constants';
import BottomNavigation from './BottomNavigation';
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={BottomNavigation} name={ROUTES.HOME_DRAWER} />
      <Drawer.Screen component={Wallet} name={ROUTES.WALLET_DRAWER} />
      <Drawer.Screen
        component={Notifications}
        name={ROUTES.NOTIFICATIONS_DRAWER}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
