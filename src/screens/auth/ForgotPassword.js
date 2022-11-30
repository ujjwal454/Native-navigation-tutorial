import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const ForgotPassword = props => {
  console.log(props);
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>ForgotPassword</Text>
      <Text style={{color: '#000'}}>{route.params.userId}</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
