import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OptionScreen from './OptionScreen';
import {SafeAreaView} from 'react-native';

const ConfirmPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OptionScreen propsValue={5} />
    </SafeAreaView>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
