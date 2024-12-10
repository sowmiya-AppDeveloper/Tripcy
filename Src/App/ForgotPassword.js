import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginDesign from '../Components/LoginDesign';
import {SafeAreaView} from 'react-native';
import OptionScreen from './OptionScreen';

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OptionScreen propsValue={3} />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
