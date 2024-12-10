import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginDesign from '../Components/LoginDesign';

const SignUp = props => {
  const propsValue = props.route.params.buttonClick;

  return (
    <SafeAreaView style={styles.container}>
      <LoginDesign propsValue={propsValue} />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
