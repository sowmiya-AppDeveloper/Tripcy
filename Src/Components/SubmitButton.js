import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../Common/Colors';

const SubmitBottom = props => {
  return (
    <TouchableOpacity
      onPress={props.handleSubmit}
      style={{
        backgroundColor:
          props.title === 'Signup' ? colors.white : colors.skyBlue,
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 24,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: props.title === 'Signup' ? colors.skyBlue : colors.white,
          fontSize: 20,
        }}>
        {props.loading ? 'Please wait....' : props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitBottom;

const styles = StyleSheet.create({});
