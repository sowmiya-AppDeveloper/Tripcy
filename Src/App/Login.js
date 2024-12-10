import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginDesign from '../Components/LoginDesign';
import {SafeAreaView} from 'react-native';

const Login = props => {
  const propsValue = props.route.params.buttonClick;
  return (
    <SafeAreaView style={styles.container}>
      <LoginDesign propsValue={propsValue} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
