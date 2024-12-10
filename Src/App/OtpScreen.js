import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import OptionScreen from './OptionScreen';

const OtpScreen = (props, val) => {
  return (
    <SafeAreaView style={styles.container}>
      <OptionScreen
        propsValue={4}
        mobNo={props.route.params.mob}
        val={props.route.params.val}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
