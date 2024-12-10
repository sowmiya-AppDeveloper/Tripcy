import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../Common/Colors';
const UserInput = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={{marginTop: 10, marginHorizontal: 10}}>
      <Text style={{color: colors.black, fontSize: 16, fontWeight: '400'}}>
        {props.name}
      </Text>
      <View style={styles.inputContainer}>
        {props.findField === 'mobile' && (
          <>
            <Text style={{marginHorizontal: 10}}>+91</Text>
            <AntDesign name="down" size={16} />
          </>
        )}
        <TextInput
          style={styles.textInput}
          value={props.value}
          maxLength={props.findField === 'mobile' ? 10 : 20}
          onChangeText={text => props.setValue(text)}
          placeholder={props.placeholder}
          keyboardType={props.findField === 'password' ? 'default' : 'numeric'}
          placeholderTextColor="#888"
          secureTextEntry={
            props.findField === 'password' ? secureTextEntry : false
          }
        />
        {props.findField === 'password' && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}>
            <FontAwesome
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#8e93a1',
    borderRadius: 25,
    height: 48,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    color: colors.black,
    marginHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
});
