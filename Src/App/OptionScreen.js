import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../Common/Colors';
import {Toast} from '../Common/Styles';
import SubmitBottom from '../Components/SubmitButton';
import UserInput from '../Components/UserInput';

const OptionScreen = props => {
  const navigation = useNavigation();
  const [mobileNo, setMobileNo] = useState('');
  const otpInputs = Array(4).fill(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOTP] = useState(otpInputs);
  const inputRefs = otp.map((_, index) => useRef(null));

  const handleSubmit = val => {
    if (val == 1) {
      navigation.navigate('login', {buttonClick: 1});
    } else if (val == 3) {
      if (mobileNo !== '') {
        if (mobileNo.length == 10) {
          navigation.navigate('otp', {mob: mobileNo, val: val});
        } else {
          Toast('Please Enter Valid Mobile Number');
        }
      } else {
        Toast('Please Enter Mobile Number');
      }
    } else if (val == 5) {
      const enteredOTP = otp.join('');
      if (enteredOTP.length < 4) {
        Toast('Please enter valid OTP');
      } else {
        if (props.val == 3) {
          navigation.navigate('confirm');
        } else {
          navigation.navigate('login', {buttonClick: 1});
          Toast('Registered Successfully');
        }
      }
    } else if (val == 'Submit') {
      if (newPassword !== '' && confirmPassword !== '') {
        navigation.navigate('login', {buttonClick: 1});
        Toast('Password Changed Successfully');
      } else {
        Toast('Please Enter New Password and Confirm Password');
      }
    } else {
      navigation.navigate('signUp', {buttonClick: 2});
    }
  };
  const handleOTPChange = (text, index) => {
    if (/^[0-9]*$/.test(text) && text.length <= 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = text;
      setOTP(updatedOTP);
    }
    if (text == '') {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else {
      if (index < otp.length - 1 && text.length === 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <ImageBackground
            source={require('../Assets/Images/userPage.png')}
            style={styles.imageBackground}>
            <View
              style={{
                position: 'absolute',
                borderWidth: 1,
                bottom: 0,
                top: 0,
                right: 0,
                left: 0,
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {props.propsValue == 3 ? (
                <Image
                  source={require('../Assets/Images/forgot.png')}
                  style={styles.headerContent}
                />
              ) : props.propsValue == 4 ? (
                <Image
                  source={require('../Assets/Images/otp.png')}
                  style={styles.headerContent1}
                />
              ) : (
                <Image
                  source={require('../Assets/Images/confirm.png')}
                  style={styles.headerContent1}
                />
              )}
            </View>
            {props.propsValue == 3 ? (
              <View style={styles.formContainer(props)}>
                <Text style={styles.title}>Forgot Password</Text>
                <Text style={styles.subTitle}>
                  Don’t worry! It happens. Please enter your phone{`\n`}number
                  associated with your account.
                </Text>
                <UserInput
                  name="Enter your mobile number"
                  value={mobileNo}
                  setValue={setMobileNo}
                  findField={'mobile'}
                />
                <View style={{marginTop: 20}}>
                  <SubmitBottom
                    title="Send OTP Code"
                    handleSubmit={() => handleSubmit(3)}
                  />
                </View>
              </View>
            ) : props.propsValue == 4 ? (
              <View style={styles.formContainer(props)}>
                <Text style={styles.title}>Enter OTP</Text>
                <Text style={styles.subTitle}>
                  A 4-digit OTP has been sent to
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  {props.mobNo}
                </Text>
                <View style={styles.otpContainer}>
                  {otp.map((digit, index) => (
                    <TextInput
                      key={index}
                      style={styles.otpInput}
                      value={digit}
                      onChangeText={text => handleOTPChange(text, index)}
                      maxLength={1}
                      autoComplete="sms-otp"
                      textContentType="oneTimeCode"
                      keyboardType="numeric"
                      ref={inputRefs[index]}
                    />
                  ))}
                </View>
                <View style={{marginTop: 20}}>
                  <SubmitBottom
                    title="Submit OTP"
                    handleSubmit={() => handleSubmit(5)}
                  />
                </View>
              </View>
            ) : props.propsValue == 5 ? (
              <View style={styles.formContainer(props)}>
                <Text style={styles.title}>Reset Your Password</Text>
                <Text style={styles.subTitle}>
                  Now you can reset your old password.
                </Text>

                <UserInput
                  name="Enter a new password"
                  value={newPassword}
                  setValue={setNewPassword}
                  findField={'password'}
                />
                <UserInput
                  name="Confirm new password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  findField={'password'}
                />

                <View style={{marginTop: 20}}>
                  <SubmitBottom
                    title="Submit"
                    handleSubmit={() => handleSubmit('Submit')}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.buttonContainer}>
                <SubmitBottom
                  title="Login"
                  handleSubmit={() => handleSubmit(1)}
                />
                <SubmitBottom
                  title="Signup"
                  handleSubmit={() => handleSubmit(2)}
                />
              </View>
            )}
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  formContainer: props => ({
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    marginTop: props.propsValue == 5 ? 400 : 450,
  }),
  title: {
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: colors.darkGrey,
  },
  otpContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  otpInput: {
    borderColor: 'gray',
    borderRadius: 4,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 8,
    height: 50,
    width: 50,
    borderWidth: 1,
  },
  headerContent: {
    height: '50%',
    width: '80%',
    resizeMode: 'contain',
  },
  headerContent1: {
    height: '50%',
    width: '30%',
    resizeMode: 'contain',
  },
});
