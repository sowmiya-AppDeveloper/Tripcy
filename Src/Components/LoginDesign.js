import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../Common/Colors';
import {Toast} from '../Common/Styles';
import SubmitBottom from '../Components/SubmitButton';
import UserInput from '../Components/UserInput';

const {width, height} = Dimensions.get('window');

const LoginDesign = props => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onPressNavigateLogin = () => {
    if (props.propsValue == 2) {
      navigation.navigate('login', {buttonClick: 1});
    } else {
      navigation.navigate('signUp', {buttonClick: 2});
    }
  };

  const navigateForgotScreen = () => {
    navigation.navigate('forgot');
  };

  const handleSubmit = val => {
    if (mobileNo && password !== '') {
      if (mobileNo.length == 10) {
        if (val == 'login') {
          navigation.navigate('homeTab');
          Toast('Login successfully');
        } else if (val == 'signUp') {
          navigation.navigate('otp', {mob: mobileNo, val: val});
        }
      } else {
        Toast('Please Enter Valid Mobile Number');
      }
    } else {
      Toast('Please Enter Mobile Number & Password');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/Images/userPage.png')}
        style={styles.imageBackground}>
        {props.propsValue == 1 ? (
          <Image
            source={require('../Assets/Images/login.png')}
            style={styles.headerContent}
          />
        ) : props.propsValue == 2 ? (
          <Image
            source={require('../Assets/Images/signUp.png')}
            style={styles.headerContent}
          />
        ) : props.propsValue == 3 ? (
          <Image
            source={require('../Assets/Images/forgot.png')}
            style={styles.headerContent}
          />
        ) : null}
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <>
            <UserInput
              name="Enter your mobile number"
              value={mobileNo}
              setValue={setMobileNo}
              findField={'mobile'}
              placeholder={'1234567890'}
            />
            <UserInput
              name="Enter your password"
              value={password}
              findField={'password'}
              setValue={setPassword}
              placeholder={'*******'}
            />
            <Text style={styles.forgotPassword} onPress={navigateForgotScreen}>
              Forgot password
            </Text>
            {props.propsValue == 1 ? (
              <SubmitBottom
                title="Login"
                handleSubmit={() => handleSubmit('login')}
              />
            ) : (
              <SubmitBottom
                title="Send OTP Code"
                handleSubmit={() => handleSubmit('signUp')}
              />
            )}
            <Text style={styles.signupText}>
              {props.propsValue == 1
                ? 'Don’t have an account?'
                : 'Already have an account?'}{' '}
              <Text style={styles.signupLink} onPress={onPressNavigateLogin}>
                {props.propsValue == 1 ? 'Sign Up' : 'Sign In'}
              </Text>
            </Text>
            <Text style={styles.dividerText}>Or</Text>
            <TouchableOpacity style={[styles.socialButton]}>
              <Image
                source={require('../Assets/Images/search.png')}
                style={{height: 30, width: 30, marginStart: 80}}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton]}>
              <Image
                source={require('../Assets/Images/facebook.png')}
                style={{height: 30, width: 30, marginStart: 80}}
              />
              <Text style={styles.socialButtonText}>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
            <Text style={styles.dividerText}>Or</Text>
            <TouchableOpacity>
              <Text style={styles.guestText}>Continue as Guest</Text>
            </TouchableOpacity>
          </>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    // alignItems: 'center',
    marginTop: 300,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  eyeIcon: {
    marginLeft: -40,
    marginRight: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: colors.skyBlue,
    marginBottom: 20,
    marginRight: 10,
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },

  signupText: {
    fontSize: 16,
    color: colors.grey,
    marginBottom: 20,
    alignSelf: 'center',
  },
  signupLink: {
    color: colors.skyBlue,
    fontWeight: 'bold',
  },
  dividerText: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  socialButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  socialButtonText: {
    color: colors.black,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
  guestText: {
    color: colors.grey,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  headerContent: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
});

export default LoginDesign;
